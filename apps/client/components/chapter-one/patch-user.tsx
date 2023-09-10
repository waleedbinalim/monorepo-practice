import { patchUserAPI } from '@/api';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import React, { useRef } from 'react';

const patchUser = async (user: User) => {
  try {
    const { data } = await patchUserAPI(user);
    return data;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const PatchUserSection: React.FC<Props> = ({ setUsers }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="w-full">
        <form
          className="flex flex-col gap-1"
          onSubmit={async (e) => {
            e.preventDefault();
            const id = idRef?.current?.value;
            const name = nameRef?.current?.value;
            if (!name || !id) return;
            const patchedUser = await patchUser({ id, name });
            setUsers([patchedUser]);
          }}
        >
          <label htmlFor="id">Id:</label>
          <input className="border-2 px-4 py-2" type="text" ref={idRef} />
          <label htmlFor="id">name:</label>
          <input className="border-2 px-4 py-2" type="text" ref={nameRef} />
          <button
            className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg"
            type="submit"
          >
            PATCH by Id
          </button>
        </form>
      </div>
    </>
  );
};

export default PatchUserSection;
