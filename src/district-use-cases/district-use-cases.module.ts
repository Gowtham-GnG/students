import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "libs/database/src/database.module";
import { CreateDistrictMapper } from "./create-district/create-district-mapper";
import { CreateDistrictController } from "./create-district/create-district.controller";
import { DeleteDistrictController } from "./delete-district/delete-district-controller";
import { GetDistrictListMapper } from "./get-district-list/get-district-list-mapper";
import { GetDistrictListController } from "./get-district-list/get-district-list.controller";
import { GetDistrictMapper } from "./get-district/get-district-mapper";
import { GetDistrictController } from "./get-district/get-district.controller";
import { UpdateDistrictMapper } from "./update-district/update-district-mapper";
import { UpdateDistrictController } from "./update-district/update-district.controller";

@Module({
    imports:[DatabaseModule,ConfigModule],
    controllers:[CreateDistrictController,GetDistrictController,GetDistrictListController,UpdateDistrictController,DeleteDistrictController],
    providers:[CreateDistrictMapper,GetDistrictMapper,GetDistrictListMapper,UpdateDistrictMapper]
})

export class DistrictUseCaseModule{}