import { AutoMap } from "@automapper/classes";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { State } from "../master-aggregate/state/state.entity";
import { ILanguage } from "./i.language.service";

@Entity()
export class Language implements ILanguage{
    @AutoMap()
    @PrimaryGeneratedColumn()
    id!: string;

    @AutoMap()
    @Column()
    name!: string;

    // @OneToMany(() => State,state => state.language)
    // state!:State[]

    public setId(id: string) {
        this.id = id;
      }
}