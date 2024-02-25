import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchedularModule } from './schedular/schedular.module';

@Module({
  imports: [UsersModule, SchedularModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
