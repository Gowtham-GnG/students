import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { CountryBase } from "./country-base";

export class GetCountryBase extends CountryBase{
    @AutoMap()
    @ApiProperty()
    id!:string

    @AutoMap()
    @ApiProperty()
    noOfState!:string
} 