import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthUser } from 'common/types';
@Injectable()
export class AuthUsersService {
  private readonly users = [
    { id: 1, name: 'Johnny', username: 'john', password: 'changeme' },
    { id: 2, name: 'Maria', username: 'maria', password: 'guess' },
  ];

  async findOne(username: string): Promise<AuthUser> {
    const foundAuthUser = this.users.find((user) => user.username === username);

    if (!foundAuthUser)
      throw new HttpException('No User Found', HttpStatus.NOT_FOUND);

    return this.users.find((user) => user.username === username);
  }
}
