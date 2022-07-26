import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { UpdateDistrictRequest } from "./update-district-request";
import { District } from "libs/database/src/master-aggregate/district/district.entity";

@Injectable()
export class UpdateDistrictMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){super(mapper)}

    mapProfile() {
        return(mapper:Mapper) => {
            mapper.createMap(UpdateDistrictRequest,District)
            .forMember(
                (destination) => destination.id,
                ignore()
            )
        }
    }
}