import { AutoMap } from "@automapper/classes";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";

  export class CountryRaw{
    @AutoMap()
    id!:string;

    @AutoMap()
    name!:string;

    @AutoMap()
    noOfState!:string;
  }