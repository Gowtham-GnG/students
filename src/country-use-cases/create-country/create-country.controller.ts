import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { ICountryService } from "libs/database/src/master-aggregate/country/i.country.service";
import { CreateCountryRequest } from "./create-country-request";
import { CreateCountryResponse } from "./create-country-response";

@ApiTags('countries')
@Controller('countries')
export class CreateCountryController{
    constructor(
        @Inject('ICountryService')private readonly countryService:ICountryService,
        @InjectMapper()private mapper:Mapper
    ){ }

    @Post()
    @ApiResponse({
        status: HttpStatus.OK,
        description: '',
        type: CreateCountryResponse,
    })
    @HttpCode(204)
    async execute(@Body() request:CreateCountryRequest):Promise<CreateCountryResponse>{
        const country = this.mapper.map(request,Country,CreateCountryRequest)
        const response = await this.countryService.insert(country)
        return response
    }
}