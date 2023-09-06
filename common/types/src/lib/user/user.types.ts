export class User {
  id!: number | string;
  name!: string;
}

export class CreateUserDto {
  name!: string;
  id!: string;
}
