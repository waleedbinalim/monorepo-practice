import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUser, SignInReqDto } from 'common/types';
import { PartialType } from '@nestjs/mapped-types';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ type: PartialType(AuthUser) })
  @Post('login')
  signIn(@Body() signInDto: SignInReqDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
