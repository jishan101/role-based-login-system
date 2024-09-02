import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      inject: [DatabaseService],
      useFactory: (databaseService: DatabaseService) =>
        databaseService.getMongoConfig(),
    }),
  ],
  controllers: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
