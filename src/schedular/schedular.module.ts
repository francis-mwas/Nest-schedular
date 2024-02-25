import { Module } from '@nestjs/common';
import { SchedularService } from './schedular.service';
import { SchedularController } from './schedular.controller';

@Module({
  providers: [SchedularService],
  controllers: [SchedularController]
})
export class SchedularModule {}
