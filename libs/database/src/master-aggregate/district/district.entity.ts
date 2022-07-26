import { AutoMap } from "@automapper/classes";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "../state/state.entity";

@Entity()
export class District{
    @AutoMap()
    @PrimaryGeneratedColumn()
    id!:string;

    @AutoMap()
    @Column()
    name!:string;

    @AutoMap()
    @ManyToOne(() => State,state => state.district,{nullable:false})
    @JoinColumn()
    state!:State;

    @AutoMap()
    @Column()
    stateId!:string;

    public setId(id: string) {
        this.id = id;
      }
}