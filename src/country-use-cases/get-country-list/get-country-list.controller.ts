import { InjectMapper } from "@automapper/nestjs";
import { Controller, Get, HttpCode, HttpStatus, Inject, Query } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Mapper } from "@automapper/types";
import { ICountryService } from "libs/database/src/master-aggregate/country/i.country.service";
import { GetCountryListtResponse } from "./get-country-list-response";
import { GetCountryListRequest } from "./get-country-list-request";
import { CountryPagedModel } from "libs/database/src/master-aggregate/country/country-model";
import { CountryRawPagedModel } from "libs/database/src/master-aggregate/country/country-raw-model";


@ApiTags('countries')
@Controller('countries')
export class GetCountryListController{
    constructor(
        @Inject('ICountryService')
        private readonly countryService:ICountryService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Get()
    @ApiResponse({
    status: HttpStatus.OK,
    description: '',
    type: GetCountryListtResponse,
    })
    @HttpCode(200)
    async execute(@Query() request:GetCountryListRequest)
    : Promise<Partial<GetCountryListtResponse>>
    {
      const result = await this.countryService.getCountryList(
        request.pageNumber,
        request.pageSize,
      );
      
      const response = this.mapper.map(result,GetCountryListtResponse,CountryRawPagedModel)
      return response
    }
}