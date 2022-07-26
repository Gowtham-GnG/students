import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "../../common/base.service";
import { DistrictPagedModel } from "./district-model";
import { District } from "./district.entity";
import { StateFilter } from "./district.filter";
import { IDistrictService } from "./i.district.service";

@Injectable()
export class DistrictService 
   extends BaseService<Repository<District>,District>
   implements IDistrictService{
    constructor(@InjectRepository(District)
    protected readonly repository:Repository<District>)
    { super(repository) }

    public async getDistrictList(pageNumber: number, pageSize: number,filter:StateFilter): Promise<DistrictPagedModel> {
        const queryBuilder = this.createQueryBuilder('d');

        queryBuilder.leftJoinAndSelect("d.state","state")

        queryBuilder.leftJoinAndSelect("state.country","country")
                    
        if(filter.stateId){
            queryBuilder.where(`d.state.id=:stateId`,
            {
                stateId:filter.stateId
            })
        }

        if(filter.countryId){
            queryBuilder.andWhere(`state.country.id=:countryId`,
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