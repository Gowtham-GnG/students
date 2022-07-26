import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";
import { CreateCountryRequest } from "./create-country-request";

@Injectable()
export class CreateCountryMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){super(mapper)}

    mapProfile() {
        return(mapper:Mapper) => {
            mapper.createMap(CreateCountryRequest,Country,{})
            .forMember((destination) => destination.id,
            ignore())
        }
    }
}