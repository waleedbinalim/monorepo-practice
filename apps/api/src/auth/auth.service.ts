import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn(username: string, password: string) {
    console.log(username, password);
    return { username, password };
  }
}
