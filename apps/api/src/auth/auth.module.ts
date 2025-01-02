import { Module } from '@nestjs/common';
import { AuthUsersModule } from '../auth-users/auth-users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret, jwtTimeLimit } from '../utils/constants';
import { RefreshTokenStrategy } from './refresh.strategy';
import { DbModule } from '../db/db.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, RefreshTokenStrategy],
  imports: [
    AuthUsersModule,
    JwtModule.register({
      global: true,
      secret: jwtSecret,
      signOptions: { expiresIn: jwtTimeLimit },
    }),
    DbModule,
  ],
})
export class AuthModule {}
