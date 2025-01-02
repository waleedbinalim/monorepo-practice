import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { SignInResDto } from 'common/types';
import { AuthUsersService } from '../auth-users/auth-users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtRefreshSecret, jwtSecret, jwtTimeLimit } from '../utils/constants';
import { RefreshTokenStrategy } from './refresh.strategy';
import { mockUsers } from '../utils/constants/mock/user';

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
    const refreshToken = await this.jwtService.signAsync(
      { id: user.id, username: user.username },
      { secret: jwtRefreshSecret, expiresIn: '7d' }
    );

    user.refreshToken = refreshToken;

    rest['token'] = token;
    rest.refreshToken = refreshToken;

    return rest;
  }

  // ==== REFRESH
  async refreshTokens(userId: number): Promise<any> {
    const user = mockUsers.find((user) => user.id === userId);

    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');

    const jwtPayload = { id: user.id, username: user.username };

    const { signAsync } = this.jwtService;

    const [authToken, refreshToken] = await Promise.all([
      signAsync(jwtPayload, { secret: jwtSecret, expiresIn: jwtTimeLimit }),
      signAsync(jwtPayload, { secret: jwtRefreshSecret, expiresIn: '7d' }),
    ]);

    user.refreshToken = refreshToken;

    return { authToken, refreshToken };
  }
}
