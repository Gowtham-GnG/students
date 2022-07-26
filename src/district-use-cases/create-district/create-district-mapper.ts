import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { District } from "libs/database/src/master-aggregate/district/district.entity";
import { State } from "libs/database/src/master-aggregate/state/state.entity";
import { CreateDistrictRequest } from "./create-district-request";

@Injectable()
export class CreateDistrictMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){super(mapper)}

    mapProfile() {
        return(mapper:Mapper) => {
            mapper.createMap(CreateDistrictRequest,District,{})
            .forMember((dest) => dest.id,
            ignore())
        }
    }

}