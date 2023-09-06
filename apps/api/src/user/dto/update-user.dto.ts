import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'common/types';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
