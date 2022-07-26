import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { ICountryService } from "libs/database/src/master-aggregate/country/i.country.service";
import { GetCountryResponse } from "./get-country-response";

@ApiTags('countries')
@Controller('countries')
export class GetCountryController{
    constructor(
        @Inject('ICountryService') private readonly countryService:ICountryService,
        @InjectMapper() private mapper:Mapper
    ) { }

    @Get(':id')
    @ApiResponse({
        status:HttpStatus.OK,
        description:'',
        type: GetCountryResponse
    })
    @HttpCode(200)
    async execute(@Param('id') id:string):Promise<GetCountryResponse>{
         const country = await this.countryService.findById(id);
         
         if(!country)
         throw new HttpException('Country Not Found',HttpStatus.BAD_REQUEST);

         const response = this.mapper.map(country,GetCountryResponse,Country);

         return response
    }
}