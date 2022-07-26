// import { AutomapperModule } from "@automapper/nestjs";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "libs/database/src/database.module";
import { CreateStateMapper } from "./create-state/create-state-mapper";
import { CreateStateController } from "./create-state/create-state.controller";
import { DeleteStateController } from "./delete-state/delete-state.controller";
import { GetStateListMapper } from "./get-state-list/get-state-list-mapper";
import { GetStateListController } from "./get-state-list/get-state-list.controller";
import { GetStateMapper } from "./get-state/get-state-mapper";
import { GetStateController } from "./get-state/get-state.controller";
import { UpdateStateMapper } from "./update-state/update-state-mapper";
import { UpdateStateController } from "./update-state/update-state.controller";


@Module({
    imports:[DatabaseModule,ConfigModule],
    controllers:[CreateStateController,GetStateController,GetStateListController,UpdateStateController,DeleteStateController],
    providers:[CreateStateMapper,GetStateMapper,GetStateListMapper,UpdateStateMapper]
})

export class StateUseCasesModule{}