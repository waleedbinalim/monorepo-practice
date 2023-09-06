import { Injectable } from '@nestjs/common';

type User = { id: number | string; name: string };

const mockUsers: User[] = [
  { id: 1, name: 'yoko' },
  { id: 2, name: 'hoko' },
  { id: 3, name: 'goko' },
  { id: 4, name: 'boko' },
  { id: 5, name: 'shoko' },
];

@Injectable()
export class AppService {
  getData(): { users: User[] } {
    return { users: mockUsers };
  }
}
