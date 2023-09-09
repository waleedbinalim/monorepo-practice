import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockUsers } from '../utils/constants/mock/user';

describe('UserController', () => {
  let controller: UserController;
  let userService;
  let userController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userService = new UserService();
    userController = new UserController(userService);

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return the list of users', async () => {
      jest.spyOn(userService, 'findAll').mockImplementation(() => mockUsers);
      expect(await userController.findAll()).toBe(mockUsers);
    });
  });

  describe('createUser', () => {
    it('should return the list of users', async () => {
      jest
        .spyOn(userService, 'create')
        .mockImplementation(() => ({ id: 1, name: 'burrito' }));
      expect(await userController.create()).toHaveProperty('name', 'burrito');
    });
  });

  describe('User search by Id', () => {
    it('should return the user with the specific Id', async () => {
      jest
        .spyOn(userService, 'findOne')
        .mockImplementation(() => ({ id: 1, name: 'burrito' }));
      expect(await userController.findOne()).toHaveProperty('name', 'burrito');
    });
  });
});
