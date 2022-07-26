import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database.module";
import { LanguageSeederModule } from "./language/language.module";
import { Seeder } from "./seeder";

@Module({
    imports:[
        DatabaseModule,
        LanguageSeederModule
    ],
    controllers : [],
    providers:[Seeder]
})
export class SeederModule{}