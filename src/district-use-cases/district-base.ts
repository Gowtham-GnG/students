import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class DistrictBase{
    @AutoMap()
    @ApiProperty()
    id!:string

    @AutoMap()
    @ApiProperty()
    name!:string

    @AutoMap()
    @ApiProperty()
    stateName!:String

    @AutoMap()
    @ApiProperty()
    countryName!:String
}