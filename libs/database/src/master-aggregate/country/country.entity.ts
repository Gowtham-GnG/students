import { AutoMap } from "@automapper/classes";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "../state/state.entity";

@Entity()
export class Country{
    @AutoMap()
    @PrimaryGeneratedColumn()
    id!:string;

    @AutoMap()
    @Column()
    name!:string;

    @AutoMap()
    @OneToMany(() => State,state => state.country)
    @JoinColumn()
    state!:State[];

    public setId(id: string) {
        this.id = id;
      }
}