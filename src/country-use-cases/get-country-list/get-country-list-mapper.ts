import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { CountryPagedModel } from "libs/database/src/master-aggregate/country/country-model";
import { GetCountryListtResponse } from "./get-country-list-response";
import { GetCountryBase } from "../get-country-base";
import { mapFrom } from "@automapper/core";
import { CountryRaw } from "libs/database/src/master-aggregate/country/country-raw";
import { CountryRawPagedModel } from "libs/database/src/master-aggregate/country/country-raw-model";


@Injectable()
export class GetCountryListMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){
        super(mapper)
     }

     mapProfile() {
         return(mapper:Mapper) => {
            // mapper.createMap(Country,GetCountryBase)
            
            mapper.createMap(CountryRaw,GetCountryBase)
            // .forMember((x) => x.NumberOfState,mapFrom((x) => x.numOfState))

            mapper.createMap(CountryRawPagedModel,GetCountryListtResponse)
         }
     }
}