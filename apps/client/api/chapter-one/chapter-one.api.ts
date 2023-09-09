import { AxiosResponse } from 'axios';
import { User } from 'common/types';
import { apiUrls } from '../../constants';
import { API } from '../api.config';

/*

THE OLD PAINFUL WAYS:

const postUsers = async () => {
  const data = await fetch('http://localhost:3000/api/user', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    body: JSON.stringify({ name: 'Jose' }),
  });
  await data.json();
};

*/

export const getUserAPI = (): Promise<AxiosResponse<{ users: User[] }>> => {
  return API.get(apiUrls.getUsers);
};

export const getUserByIdAPI = (
  id: string | number
): Promise<AxiosResponse<User>> => {
  // IF USING TS can also be done this way
  // return API.get<User>(apiUrls.getUsersById(id));
  return API.get(apiUrls.getUsersById(id));
};

export const postUserAPI = (payload: {
  name: string;
}): Promise<AxiosResponse<User>> => {
  return API.post(apiUrls.postUser, payload);
};

export const patchUserAPI = (user: User): Promise<AxiosResponse<User>> => {
  const { id } = user;
  const payload = user;

  return API.patch(apiUrls.patchUsersById(id), payload);
};

export const deleteUserAPI = (
  id: string | number
): Promise<AxiosResponse<User>> => {
  return API.delete(apiUrls.postUser + '/' + id);
};
