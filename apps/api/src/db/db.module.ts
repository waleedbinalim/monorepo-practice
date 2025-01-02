import { Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  exports: [DbService], // Export DbService so it can be used in other modules
})
export class DbModule {}
