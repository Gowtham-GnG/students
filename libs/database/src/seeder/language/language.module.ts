import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Language } from "../language.entity";
import { LanguageSeederService } from "./language.service";


@Module({
    imports:[TypeOrmModule.forFeature([Language])],
    controllers:[],
    providers:[LanguageSeederService],
    exports:[LanguageSeederService]
})
export class LanguageSeederModule{}