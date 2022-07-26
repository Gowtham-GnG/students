import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from '@automapper/classes';
import { Country } from "../country/country.entity";
import { District } from "../district/district.entity";

@Entity()
export class State{
    @AutoMap()
    @PrimaryGeneratedColumn()
    id!:string;

    @AutoMap()
    @Column()
    name!:string;

    @AutoMap()
    @Column()
    countryId!:string;

    @AutoMap()
    @ManyToOne(() => Country,country => country.state,{nullable:false})
    @JoinColumn()
    country!:Country;

    @AutoMap()
    @OneToMany(() => District,district => district.state)
    @JoinColumn()
    district!:District[];
    
    public setId(id: string) {
        this.id = id;
      }
}
