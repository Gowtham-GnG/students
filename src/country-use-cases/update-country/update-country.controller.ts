import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { ICountryService } from "libs/database/src/master-aggregate/country/i.country.service";
import { UpdateCountryRequest } from "./update-country-request";


@ApiTags('countries')
@Controller('countries')
export class UpdateCountryController{
    constructor(
        @Inject('ICountryService') private readonly countryService:ICountryService,
        @InjectMapper() private mapper:Mapper
    ){ }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id:string,@Body() request:UpdateCountryRequest):Promise<void>{
        const isExists = await this.countryService.isExistsById(id);
        if(!isExists)
            throw new HttpException('Country Not Found',HttpStatus.BAD_REQUEST);

      const country = this.mapper.map(request,Country,UpdateCountryRequest)
      country.setId(id)
      await this.countryService.updateById(id,country)
       
    }
}