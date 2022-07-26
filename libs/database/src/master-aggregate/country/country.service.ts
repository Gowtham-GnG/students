import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "../../common/base.service";
import { CountryPagedModel } from "./country-model";
import { CountryRawPagedModel } from "./country-raw-model";
import { Country } from "./country.entity";
import { ICountryService } from "./i.country.service";

@Injectable()
export class CountryService 
    extends BaseService<Repository<Country>,Country>
    implements ICountryService{
        constructor(
            @InjectRepository(Country)
            protected readonly repository:Repository<Country>
        ){
            super(repository)
        }

        public async getCountryList(pageNumber: number, pageSize: number): Promise<CountryRawPagedModel> {
            const queryBuilder = this.createQueryBuilder('c')

                         queryBuilder.leftJoinAndSelect("c.state","s")
                                     .select(['c.id as id','c.name as name'])
                                     .addSelect("COUNT(s.id)","noOfState")
                                     .groupBy("c.id");
                                     
            
            const result = await this.pagedRaw(
                queryBuilder,
                pageNumber,
                pageSize
                );
                
                return result
        }
    }