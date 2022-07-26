import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Language } from "../language.entity";
import { DATA } from "./language-data";

@Injectable()
export class LanguageSeederService{
    constructor(
        @InjectRepository(Language)
        private readonly repository:Repository<Language>
    ){ }

    createLanguageData():Promise<any>[]{
        return DATA.map(async data => await this.repository.save(this.repository.create(data)))
    }
}