import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUser, SignInReqDto } from 'common/types';
import { PartialType } from '@nestjs/mapped-types';
import { AuthGuard, RefreshTokenGuard } from '../guards';
import { DbService } from '../db/db.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly dbService: DbService
  ) {}

  @ApiCreatedResponse({ type: PartialType(AuthUser) })
  @Post('login')
  signIn(@Body() signInDto: SignInReqDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  // TODO HERE
  // @ApiCreatedResponse({ type: PartialType(AuthUser) })

  @ApiCreatedResponse({ type: String })
  @UseGuards(AuthGuard)
  @Post('verify')
  verifyLogin() {
    return 'Better do something here';
  }

  @ApiCreatedResponse({ type: String })
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refreshToken() {
    return 'Better do something here';
  }

  @Get('usersss')
  async getUsers() {
    const sha = await this.dbService.query('SELECT * from users');
    return sha;
  }
}
