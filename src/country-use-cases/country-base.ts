import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class CountryBase{
    @AutoMap()
    @ApiProperty()
    id!:string;

    @AutoMap()
    @ApiProperty()
    name!:string

    // @AutoMap()
    // @ApiProperty()
    // count!:string
}