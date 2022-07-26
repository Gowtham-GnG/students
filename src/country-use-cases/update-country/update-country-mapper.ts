import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { UpdateCountryRequest } from "./update-country-request";
import { Country } from "libs/database/src/master-aggregate/country/country.entity";

@Injectable()
export class UpdateCountryMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){super(mapper)}

    mapProfile() {
        return(mapper:Mapper) => {
            mapper.createMap(UpdateCountryRequest,Country)
            .forMember(
                (destination) => destination.id,
                ignore()
            )
        }
    }
}