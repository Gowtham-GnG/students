
import { NestFactory } from '@nestjs/core';
import { Seeder } from 'libs/database/src/seeder/seeder';
import { SeederModule } from 'libs/database/src/seeder/seeder.module';

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule).then((appContext) => {
    const seeder = appContext.get(Seeder);

    seeder
      .seed()
      .then(() => {
        console.debug('Seeding complete!');
      })
      .catch((error) => {
        console.error('Seeding failed!');
        throw error;
      })
      .finally(() => appContext.close());
  });
}
bootstrap();
