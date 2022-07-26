import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { IDistrictService } from "libs/database/src/master-aggregate/district/i.district.service";
import { GetDistrictResponse } from "./get-district-response";

@ApiTags('districts')
@Controller('districts')
export class GetDistrictController{
    constructor(
        @Inject('IDistrictService') private readonly districtService:IDistrictService,
        @InjectMapper() private mapper:Mapper
    ) { }

    @Get(':id')
    @ApiResponse({
        status:HttpStatus.OK,
        description:'',
        type: GetDistrictResponse
    })
    @HttpCode(200)
    async execute(@Param('id') id:string):Promise<GetDistrictResponse>{
         const district = await this.districtService.findById(id);
         
         if(!district)
         throw new HttpException('State Not Found',HttpStatus.BAD_REQUEST);

         const response = this.mapper.map(district,GetDistrictResponse,District);

         return response
    }
}