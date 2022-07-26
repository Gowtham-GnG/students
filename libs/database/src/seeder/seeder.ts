import { Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { LanguageSeederService } from "./language/language.service";


@Injectable()
export class Seeder{
    constructor(
        private readonly languageSeederService:LanguageSeederService
    ){ }

    async clean(){
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.clearDatabase();
    }

    async seed() {
        await this.seedInitial();
    }

    async seedInitial(){
       const LANGUAGE_DATA = await this.languageData()
       return{
        LANGUAGE_DATA
       }
    }

    async languageData():Promise<number>{
        return await Promise.all(this.languageSeederService.createLanguageData())
        .then((created) => {
            const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
            ).length;
            return ROW;
        })
        .catch((err) => {
            return Promise.reject(err)
        })
    }
}