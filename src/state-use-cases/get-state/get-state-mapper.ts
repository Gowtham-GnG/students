import { State } from "libs/database/src/master-aggregate/state/state.entity";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { GetStateResponse } from "./get-state-response";
import { mapFrom } from "@automapper/core";

@Injectable()
export class GetStateMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(State,GetStateResponse)
      .forMember((x) => x.countryName,mapFrom((x)=>x.country.name))
    };
  }
}
