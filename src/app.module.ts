import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { StateUseCasesModule } from './state-use-cases/state-use-cases.module';
import { DatabaseModule } from 'libs/database/src/database.module';
import { SeederModule } from 'libs/database/src/seeder/seeder.module';
import { CountryUseCaseModule } from './country-use-cases/country-use-cases.module';
import { DistrictUseCaseModule } from './district-use-cases/district-use-cases.module';


@Module({
  imports: [
    // SeederModule,
    ConfigModule.forRoot(),
    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: classes }],
      singular: true,
    }),
    DatabaseModule,
    CountryUseCaseModule,
    StateUseCasesModule,
    DistrictUseCaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
