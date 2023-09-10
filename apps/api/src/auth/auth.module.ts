import { Module } from '@nestjs/common';
import { AuthUsersModule } from '../auth-users/auth-users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [AuthUsersModule],
})
export class AuthModule {}
