
import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "../../common/paged-response";
import { State } from "./state.entity";


export class StatePagedModel extends PagedResponse{
    @AutoMap({typeFn:()=>State})
    items:State[];
}