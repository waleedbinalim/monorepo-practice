import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthUsersService } from '../auth-users/auth-users.service';
import { SignInResDto } from 'common/types';

@Injectable()
export class AuthService {
  constructor(private authUsersService: AuthUsersService) {}

  async signIn(username: string, password: string): Promise<SignInResDto> {
    const user = await this.authUsersService.findOne(username, password);

    if (!user) throw new HttpException('Fields Missing', HttpStatus.NO_CONTENT);

    return user;
  }
}
