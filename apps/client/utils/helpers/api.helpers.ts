import { errMessages } from '../../constants';
import { isAxiosError } from 'axios';

export const handleAPIError = (error: unknown): never => {
  if (isAxiosError(error)) {
    // ADD API ERROR LOGIC HERE WHEN NEEDED:

    const { response } = error;

    console.log('Error Ocurred');

    if (response?.data?.message || response?.data?.statusCode) {
      throw `${response?.data?.message || response?.data?.statusCode}`;
    }
  }
  throw errMessages.unknown;
};
