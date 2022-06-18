import { Module } from '@nestjs/common';
import { BanerService } from './baner.service';
import { BanerController } from './baner.controller';

@Module({
  providers: [BanerService],
  controllers: [BanerController]
})
export class BanerModule {}
