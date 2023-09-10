import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInResDto } from 'common/types';
@Injectable()
export class AuthUsersService {
  private readonly users = [
    { id: 1, name: 'Johnny', username: 'john', password: 'changeme' },
    { id: 2, name: 'Maria', username: 'maria', password: 'guess' },
  ];

  async findOne(username: string, password: string): Promise<SignInResDto> {
    const foundAuthUser = this.users.find((user) => user.username === username);

    if (!foundAuthUser)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);

    if (foundAuthUser?.password !== password)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: pass, ...result } = foundAuthUser;

    return result;
  }
}
