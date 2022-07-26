import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { DistrictBase } from "./district-base";

export class GetDistrictBase extends DistrictBase{
    @AutoMap()
    @ApiProperty()
    id!:string
}