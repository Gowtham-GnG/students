import { NestFactory } from '@nestjs/core';
import { Seeder } from 'libs/database/src/seeder/seeder';
import { SeederModule } from 'libs/database/src/seeder/seeder.module';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule).then((appContext) => {
    const seeder = appContext.get(Seeder);

    seeder
      .clean()
      .then(() => {
        console.debug('Cleaning database complete!');
      })
      .catch((error) => {
        console.error('Cleaning database failed!');
        throw error;
      })
      .finally(() => appContext.close());
  });
}
bootstrap();
