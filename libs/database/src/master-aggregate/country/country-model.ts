import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "../../common/paged-response";
import { Country } from "./country.entity";

export class CountryPagedModel extends PagedResponse{
    @AutoMap({typeFn:() => Country})
    items:Country[]
}