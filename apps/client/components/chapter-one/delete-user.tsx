import { deleteUserAPI } from '@/api';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import React, { useRef } from 'react';

const deleteUser = async (id: string | number) => {
  try {
    const { data } = await deleteUserAPI(id);
    return data;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const DeleteUserSection: React.FC<Props> = ({ setUsers }) => {
  const idRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="w-full">
        <form
          className="flex flex-col gap-1"
          onSubmit={async (e) => {
            e.preventDefault();
            const id = idRef?.current?.value;

            if (!id) return;
            const { users } = await deleteUser(id);
            setUsers(() => [...users]);
          }}
        >
          <label htmlFor="id">Id:</label>
          <input className="border-2 px-4 py-2" type="text" ref={idRef} />

          <button
            className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg"
            type="submit"
          >
            Delete by Id
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteUserSection;
