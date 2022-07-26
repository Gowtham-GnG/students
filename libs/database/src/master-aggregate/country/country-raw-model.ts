import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "../../common/paged-response";
import { CountryRaw } from "./country-raw";

export class CountryRawPagedModel extends PagedResponse{
    @AutoMap({typeFn:() => CountryRaw})
    items:CountryRaw[]
}