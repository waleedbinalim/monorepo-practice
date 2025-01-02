import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [AuthModule, UserModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
