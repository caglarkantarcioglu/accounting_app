import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports: [],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
