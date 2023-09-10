import { AxiosResponse } from 'axios';
import { apiUrls } from '../../constants';
import { API } from '../api.config';
import { SignInResDto } from 'common/types/src';

export const signinUserAPI = async (payload: {
  username: string;
  password: string;
}): Promise<AxiosResponse<SignInResDto>> => {
  return await API.post(apiUrls.signIn, payload);
};
