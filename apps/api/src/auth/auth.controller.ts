import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUser, SignInReqDto } from 'common/types';
import { PartialType } from '@nestjs/mapped-types';
import { AuthGuard } from '../guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
}
