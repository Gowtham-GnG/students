import { IBaseService } from "../../common/i.base.service";
import { DistrictPagedModel } from "./district-model";
import { District } from "./district.entity";
import { StateFilter } from "./district.filter";

export interface IDistrictService extends IBaseService<District>{
    getDistrictList(
        pageNumber:number,
        pageSize:number,
        filter:StateFilter
    ):Promise<DistrictPagedModel>
}