import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchedularModule } from './schedular/schedular.module';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import dbConfigs from "./dbConfigs";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dbConfigs),
    UsersModule,
    SchedularModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
