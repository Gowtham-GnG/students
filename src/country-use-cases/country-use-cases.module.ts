import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "libs/database/src/database.module";
import { CreateCountryMapper } from "src/country-use-cases/create-country/create-country-mapper";
import { CreateCountryController } from "src/country-use-cases/create-country/create-country.controller";
import { DeleteCountryController } from "src/country-use-cases/delete-country/delete-country.controller";
import { GetCountryListMapper } from "src/country-use-cases/get-country-list/get-country-list-mapper";
import { GetCountryListController } from "src/country-use-cases/get-country-list/get-country-list.controller";
import { GetCountryMapper } from "src/country-use-cases/get-country/get-country-mapper";
import { GetCountryController } from "src/country-use-cases/get-country/get-country.controller";
import { UpdateCountryMapper } from "src/country-use-cases/update-country/update-country-mapper";
import { UpdateCountryController } from "src/country-use-cases/update-country/update-country.controller";

@Module({
    imports:[DatabaseModule,ConfigModule],
    controllers:[CreateCountryController,GetCountryController,GetCountryListController,UpdateCountryController,DeleteCountryController],
    providers:[CreateCountryMapper,GetCountryMapper,GetCountryListMapper,UpdateCountryMapper]
})

export class CountryUseCaseModule{}