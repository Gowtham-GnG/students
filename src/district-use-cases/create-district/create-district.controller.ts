import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { IDistrictService } from "libs/database/src/master-aggregate/district/i.district.service";
import { CreateDistrictRequest } from "./create-district-request";
import { CreateDistrictResponse } from "./create-district-response";

@ApiTags('districts')
@Controller('districts')
export class CreateDistrictController{
    constructor(
        @Inject('IDistrictService') private readonly districtService:IDistrictService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: '',
        type: CreateDistrictResponse,
    })
    @HttpCode(204)
    async execute(@Body() request:CreateDistrictRequest):Promise<CreateDistrictResponse>{
        const district = this.mapper.map(request,District,CreateDistrictRequest)
        const response = await this.districtService.insert(district)
        return response
    }
}