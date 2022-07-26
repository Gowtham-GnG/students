import { IBaseService } from "../../common/i.base.service";
import { CountryFilter } from "./state-filter";
import { StatePagedModel } from "./state-model";
import { State } from "./state.entity";


export interface IStateService extends IBaseService<State>{
    getStateList(
        pageNumber:number,
        pageSize:number,
        filter?:CountryFilter
    ):Promise<StatePagedModel>
}