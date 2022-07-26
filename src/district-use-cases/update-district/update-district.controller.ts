import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { IDistrictService } from "libs/database/src/master-aggregate/district/i.district.service";
import { UpdateDistrictRequest } from "./update-district-request";

@ApiTags('districts')
@Controller('districts')
export class UpdateDistrictController{
    constructor(
        @Inject('IDistrictService') private readonly districtService:IDistrictService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string,@Body() request:UpdateDistrictRequest):Promise<void>{
        const isExists = await this.districtService.isExistsById(id);
        if(!isExists)
            throw new HttpException('District Not Found',HttpStatus.BAD_REQUEST);

      const district = this.mapper.map(request,District,UpdateDistrictRequest)
      district.setId(id)
      await this.districtService.updateById(id,district)
       
    }
}