import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { DistrictPagedModel } from "libs/database/src/master-aggregate/district/district-model";
import { GetDistrictBase } from "../get-district-base";
import { GetDistrictListtResponse } from "./get-district-list-response";
import { mapFrom } from "@automapper/core";


@Injectable()
export class GetDistrictListMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){
        super(mapper)
     }

     mapProfile() {
         return(mapper:Mapper) => {
            mapper.createMap(District,GetDistrictBase)
            .forMember((destination) => (destination.stateName),mapFrom((x) => x.state.name))
            .forMember((destination) => (destination.countryName),mapFrom((x) => x.state.country.name))

            mapper.createMap(DistrictPagedModel,GetDistrictListtResponse)
         }
     }
}