import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "libs/database/src/common/paged-response";
import { GetStateBase } from "../get-state-base";


export class GetStateListtResponse extends PagedResponse{
    @ApiProperty({type: [GetStateBase]})
    @AutoMap({typeFn:()=>GetStateBase})
    items!: GetStateBase[];
}