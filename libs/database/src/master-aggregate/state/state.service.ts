import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { BaseService } from "../../common/base.service";
import { IStateService } from "./i.state.service";
import { CountryFilter } from "./state-filter";
import { StatePagedModel } from "./state-model";
import { State } from "./state.entity";



@Injectable()
export class StateService 
   extends BaseService<Repository<State>,State>
   implements IStateService
   {
    constructor(
        @InjectRepository(State)
        protected readonly repository:Repository<State>
    ){
        super(repository)
    }
    public async getStateList(
        pageNumber: number, 
        pageSize: number,
        filter?:CountryFilter
        ): Promise<StatePagedModel> {
        const queryBuilder = this.createQueryBuilder('d');

        queryBuilder.leftJoinAndSelect('d.country','country')

        if(filter.countryId){
            queryBuilder.where(`d.country.id=:countryId`,
            {
                countryId:filter.countryId
            })
        }

        const result = await this.paged(
            queryBuilder,
            pageNumber,
            pageSize
            );
            
            return result
    }
    
    }
   