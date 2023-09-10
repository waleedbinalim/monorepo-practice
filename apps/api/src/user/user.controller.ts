import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto, User } from 'common/types';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from '../interceptors';
import { AuthGuard } from '../guards';

@ApiTags('User')
@UseInterceptors(LoggingInterceptor)
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ type: User, isArray: true })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiCreatedResponse({ type: User })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string | number) {
    return this.userService.findOne(+id);
  }

  @ApiCreatedResponse({ type: User })
  @Patch(':id')
  update(
    @Param('id') id: string | number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
