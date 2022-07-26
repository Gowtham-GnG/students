import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "../../common/paged-response";
import { District } from "./district.entity";

export class DistrictPagedModel extends PagedResponse{
    @AutoMap({typeFn:()=>District})
    items:District[]
}