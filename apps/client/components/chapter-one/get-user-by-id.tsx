import { getUserByIdAPI } from '@/api';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import React, { useRef } from 'react';

const getUserById = async (id: string | number) => {
  try {
    const { data } = await getUserByIdAPI(id);
    return data;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const GetUserByIdSection: React.FC<Props> = ({ setUsers }) => {
  const idRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="flex flex-col gap-1"
        onSubmit={async (e) => {
          e.preventDefault();
          const id = idRef?.current?.value;
          if (!id) return;
          const user = await getUserById(id);
          setUsers([user]);
        }}
      >
        <label htmlFor="id">User Id:</label>
        <input className="border-2 px-4 py-2" type="text" ref={idRef} />
        <button
          type="submit"
          className="text-white bg-blue-600 px-4 py-2 rounded-lg"
        >
          GET by ID
        </button>
      </form>
    </>
  );
};

export default GetUserByIdSection;
