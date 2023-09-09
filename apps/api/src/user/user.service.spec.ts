import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create User', () => {
    it('should return the created user', () => {
      const createdUser = { name: 'test created user' };
      expect(service.create(createdUser)).toHaveProperty(
        'name',
        createdUser.name
      );
    });
  });
});
