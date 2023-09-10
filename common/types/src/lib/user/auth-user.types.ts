import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUser {
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: true,
  })
  id!: number | string;

  @ApiProperty({ required: true })
  name!: string;

  @ApiProperty({ required: true })
  username!: string;

  @ApiProperty({ required: true })
  password!: string;
}

export class CreateAuthUserDto {
  @ApiProperty({ required: true })
  name!: string;
  @ApiProperty({ required: true })
  username!: string;
  @ApiProperty({ required: true })
  password!: string;
}

export class SignInReqDto {
  @ApiProperty({ required: true })
  username!: string;

  @ApiProperty({ required: true })
  password!: string;
}

export class SignInResDto extends PartialType(AuthUser) {
  @ApiProperty({ required: true })
  override name!: string;

  @ApiProperty({ required: true })
  override username!: string;
}
