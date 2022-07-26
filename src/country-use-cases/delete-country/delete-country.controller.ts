import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ICountryService } from "libs/database/src/master-aggregate/country/i.country.service";

@ApiTags('countries')
@Controller('countries')

export class DeleteCountryController{
    constructor(
        @Inject('ICountryService') private readonly countryService:ICountryService
    ){ }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string){
        const isExists = await this.countryService.isExistsById(id)
        if (!isExists)
        throw new HttpException('State Not Found', HttpStatus.BAD_REQUEST);

        await this.countryService.deleteById(id)
    }
}