import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { mockUsers } from '../utils/constants/mock/user';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    // TODO This mockId thing doesn't work better switch to uuid
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
    return { users: newUser };
  }

  findAll() {
    return { users: mockUsers };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
