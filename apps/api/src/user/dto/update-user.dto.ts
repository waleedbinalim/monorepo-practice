import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'common/types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: true })
  name!: string;
}
