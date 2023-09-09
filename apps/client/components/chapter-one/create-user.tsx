import { postUserAPI } from '@/api';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import React, { useRef } from 'react';

const postUsers = async (name: string) => {
  try {
    const { data } = await postUserAPI({ name });
    return data;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const CreateUserSection: React.FC<Props> = ({ setUsers }) => {
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="w-full">
        <form
          className="flex flex-col gap-1"
          onSubmit={async (e) => {
            e.preventDefault();
            const name = nameRef?.current?.value;
            if (!name) return;
            const newUser = await postUsers(name);
            setUsers((current) => [...current, newUser]);
          }}
        >
          <label htmlFor="id">Name:</label>
          <input className="border-2 px-4 py-2" type="text" ref={nameRef} />
          <button
            className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg"
            type="submit"
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUserSection;
