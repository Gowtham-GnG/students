import { CountryService } from "./master-aggregate/country/country.service";
import { DistrictService } from "./master-aggregate/district/district.service";
import { StateService } from "./master-aggregate/state/state.service";


export default [
    {
        provide:'IStateService',
        useClass:StateService
    },
    {
        provide:'ICountryService',
        useClass:CountryService
    },
    {
        provide:'IDistrictService',
        useClass:DistrictService
    }
]