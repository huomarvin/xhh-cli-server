import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './modules/project/project.module';
import { CommandModule } from './modules/command/command.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      dbName: process.env.MONGO_DB_DBNAME,
      user: process.env.MONGO_DB_USER,
      pass: process.env.MONGO_DB_PASS,
    }),
    ProjectModule,
    CommandModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
