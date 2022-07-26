import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "libs/database/src/common/paged-response";
import { GetCountryBase } from "../get-country-base";

export class GetCountryListtResponse extends PagedResponse{
    @ApiProperty({type: [GetCountryBase]})
    @AutoMap({typeFn:()=>GetCountryBase})
    items!:GetCountryBase[];
}