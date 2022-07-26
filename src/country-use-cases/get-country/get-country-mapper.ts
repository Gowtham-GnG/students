import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { GetCountryResponse } from "./get-country-response";

@Injectable()
export class GetCountryMapper extends AutomapperProfile{
   constructor(
    @InjectMapper() mapper:Mapper
   ){super(mapper)}

   mapProfile() {
       return(mapper:Mapper) => {
        mapper.createMap(Country,GetCountryResponse)
       }
   }
}