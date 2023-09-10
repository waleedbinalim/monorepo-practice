import { Module } from '@nestjs/common';
import { AuthUsersModule } from '../auth-users/auth-users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    AuthUsersModule,
    JwtModule.register({ secret: 'hard!to-guess_secret' }),
  ],
})
export class AuthModule {}
