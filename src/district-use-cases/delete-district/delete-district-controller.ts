import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IDistrictService } from "libs/database/src/master-aggregate/district/i.district.service";

@ApiTags('districts')
@Controller('districts')

export class DeleteDistrictController{
    constructor(
        @Inject('IDistrictService') private readonly districtService:IDistrictService
    ){ }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string){
        const isExists = await this.districtService.isExistsById(id)
        if (!isExists)
        throw new HttpException('State Not Found', HttpStatus.BAD_REQUEST);

        await this.districtService.deleteById(id)
    }
}