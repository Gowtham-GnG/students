import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "libs/database/src/common/paged-response";
import { GetDistrictBase } from "../get-district-base";

export class GetDistrictListtResponse extends PagedResponse {
    @ApiProperty({type: [GetDistrictBase]})
    @AutoMap({typeFn:()=>GetDistrictBase})
    items!: GetDistrictBase[];
}