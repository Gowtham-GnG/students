import { InjectMapper } from "@automapper/nestjs";
import { Controller, Get, HttpStatus, Inject, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Mapper } from "@automapper/types";
import { IDistrictService } from "libs/database/src/master-aggregate/district/i.district.service";
import { GetDistrictListtResponse } from "./get-district-list-response";
import { DistrictPagedModel } from "libs/database/src/master-aggregate/district/district-model";
import { GetDistrictListRequest } from "./get-district-list-request";
import { CountryFilter } from "libs/database/src/master-aggregate/state/state-filter";
import { StateFilter } from "libs/database/src/master-aggregate/district/district.filter";


@ApiTags('districts')
@Controller('districts')
export class GetDistrictListController{
    constructor(
        @Inject('IDistrictService')
        private readonly districtService:IDistrictService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Get()
    @ApiResponse({
    status: HttpStatus.OK,
    description: '',
    type: GetDistrictListtResponse,
    })
    async execute(@Query() request:GetDistrictListRequest)
    : Promise<Partial<GetDistrictListtResponse>>
    {
      const filter:StateFilter={
        stateId:request.stateId,
        countryId:request.countryId
      }
      
      const result = await this.districtService.getDistrictList(
        request.pageNumber,
        request.pageSize,
        filter
      );
      
      const response = this.mapper.map(result,GetDistrictListtResponse,DistrictPagedModel)
  
      return response
    }
}