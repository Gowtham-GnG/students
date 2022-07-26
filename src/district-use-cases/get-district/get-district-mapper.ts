import { mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { GetDistrictResponse } from "./get-district-response";

@Injectable()
export class GetDistrictMapper extends AutomapperProfile{
     constructor(@InjectMapper() mapper:Mapper){
        super(mapper)
     }

     mapProfile() {
         return(mapper:Mapper) => {
            mapper.createMap(District,GetDistrictResponse)
            .forMember((destination) => (destination.stateName),mapFrom((x) => x.state.name))
            .forMember((destination) => (destination.countryName),mapFrom((x) => x.state.country.name))
         }
     }
}