import { ApiPropertyOptional } from "@nestjs/swagger";
import { PagingParams } from "libs/database/src/common/paging-params";

export class GetDistrictListRequest extends PagingParams{
    @ApiPropertyOptional()
    stateId: string;

    @ApiPropertyOptional()
    countryId: string;

}