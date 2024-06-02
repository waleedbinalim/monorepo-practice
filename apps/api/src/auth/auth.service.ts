import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInResDto } from 'common/types';
import { AuthUsersService } from '../auth-users/auth-users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private authUsersService: AuthUsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, password: string): Promise<SignInResDto> {
    const user = await this.authUsersService.findOne(username, password);
    if (!user) throw new HttpException('Fields Missing', HttpStatus.NO_CONTENT);

    const { password: pass, ...rest } = user;

    const token = await this.jwtService.signAsync({ username });
    rest['token'] = token;

    console.log(rest);

    return rest;
  }
}
