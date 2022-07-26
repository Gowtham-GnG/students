import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Mapper } from "@automapper/types";
import { State } from "libs/database/src/master-aggregate/state/state.entity";
import { GetStateBase } from "../get-state-base";
import { StatePagedModel } from "libs/database/src/master-aggregate/state/state-model";
import { GetStateListtResponse } from "./get-state-list-response";
import { mapFrom } from "@automapper/core";


@Injectable()
export class GetStateListMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper:Mapper){
        super(mapper)
     }

     mapProfile() {
         return(mapper:Mapper) => {
            mapper.createMap(State,GetStateBase)
            .forMember((x) => x.countryName,mapFrom((x)=>x.country.name))
            
            mapper.createMap(StatePagedModel,GetStateListtResponse)
         }
     }
}