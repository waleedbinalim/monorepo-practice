import { API } from '../api.config';
import { apiUrls } from '../../constants';
import { AxiosPromise } from 'axios';

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
  console.log(await data.json());
};

*/

export const getUserAPI = (): any => {
  return API.get(apiUrls.getUsers);
};

export const postUserAPI = (payload: { name: string }): AxiosPromise => {
  return API.post(apiUrls.postUser, payload);
};
