import { Module } from '@nestjs/common';
import { AuthUsersService } from './auth-users.service';

@Module({
  providers: [AuthUsersService]
})
export class AuthUsersModule {}
