import { ApiProperty } from "@nestjs/swagger";

export class CreateCountryResponse{
    @ApiProperty()
    id!:string
}