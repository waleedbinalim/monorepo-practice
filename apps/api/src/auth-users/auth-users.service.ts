import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthUser } from 'common/types';
@Injectable()
export class AuthUsersService {
  private readonly users = [
    { id: 1, name: 'Johnny', username: 'john', password: 'changeme' },
    { id: 2, name: 'Maria', username: 'maria', password: 'guess' },
  ];

  async findOne(username: string, password: string): Promise<AuthUser> {
    const foundAuthUser: AuthUser = this.users.find(
      (user) => user.username === username
    );

    const passwordMismatch: boolean = foundAuthUser?.password !== password;

    if (!foundAuthUser || passwordMismatch)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);

    return foundAuthUser;
  }
}
