import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }],
    required: true,
  })
  id!: number | string;

  @ApiProperty({ required: true })
  name!: string;
}

export class CreateUserDto {
  @ApiProperty()
  name!: string;
  @ApiProperty({ required: false })
  id?: string | number;
}
