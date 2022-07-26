import { IBaseService } from "../../common/i.base.service";
import { CountryPagedModel } from "./country-model";
import { CountryRawPagedModel } from "./country-raw-model";
import { Country } from "./country.entity";

export interface ICountryService extends IBaseService<Country>{
    getCountryList(
        pageNumber:number,
        pageSize:number,
    ):Promise<CountryRawPagedModel>
}