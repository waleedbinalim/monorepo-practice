import { getUserAPI } from '@/api';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import React from 'react';

const getUsers = async () => {
  try {
    const { data } = await getUserAPI();
    const { users } = data;
    return users;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const GetUsersSection: React.FC<Props> = ({ setUsers }) => {
  return (
    <>
      <button
        onClick={async () => {
          const userList = await getUsers();
          setUsers(userList);
        }}
        className="text-white bg-blue-600 px-4 py-2 rounded-lg"
      >
        GET Users
      </button>
    </>
  );
};

export default GetUsersSection;
