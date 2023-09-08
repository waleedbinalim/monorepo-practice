import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { UpdateUserDto } from './dto/update-user.dto';
import { mockUsers } from '../utils/constants/mock/user';
import { CreateUserDto, User } from 'common/types';
@Injectable()
export class UserService {
  findAll() {
    return { users: mockUsers };
  }

  create(createUserDto: CreateUserDto) {
    const maxId = mockUsers.map((user): number => {
      const { id } = user;
      if (typeof id === 'string') return parseInt(id);
      return id;
    });
    Math.max();
    const newUser: User = {
      id: Math.max(...maxId) + 1,
      name: createUserDto.name,
    };
    mockUsers.push(newUser);
    return newUser;
  }

  findOne(id: number) {
    const user = mockUsers.find((user) => user.id === id);
    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    return user;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   console.log(updateUserDto);
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
