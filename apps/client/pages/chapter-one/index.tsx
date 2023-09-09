import { getUserByIdAPI, patchUserAPI, postUserAPI } from '@/api';
import { GetUserByIdSection, GetUsersSection } from '@/components';
import { errMessages } from '@/constants';
import { handleAPIError } from '@/utils/helpers';
import { User } from 'common/types';
import { NextPage } from 'next';
import { useRef, useState } from 'react';

const getUserById = async (id: string | number) => {
  try {
    const { data } = await getUserByIdAPI(id);
    return data;
  } catch (error) {
    handleAPIError(error);
    throw errMessages.unknown;
  }
};

const postUsers = async (name: string) => {
  try {
    const { data } = await postUserAPI({ name });
    return data;
  } catch (error) {
    throw errMessages.unknown;
  }
};

const patchUser = async (user: User) => {
  try {
    const { data } = await patchUserAPI(user);
    return data;
  } catch (error) {
    throw errMessages.unknown;
  }
};

const ChapterOnePage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-xl font-bold mb-8">Heres a sample CRUD below:</div>

        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 w-1/2 px-4 py-2">
            <GetUsersSection setUsers={setUsers} />
            <GetUserByIdSection setUsers={setUsers} />

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
                <input
                  className="border-2 px-4 py-2"
                  type="text"
                  ref={nameRef}
                />
                <button
                  className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg"
                  type="submit"
                >
                  POST
                </button>
              </form>
            </div>

            <div className="w-full">
              <form
                className="flex flex-col gap-1"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const id = idRef?.current?.value;
                  const name = nameRef?.current?.value;
                  if (!name || !id) return;
                  const patchedUser = await patchUser({ id, name });
                  setUsers(() => [patchedUser]);
                }}
              >
                <label htmlFor="id">Id:</label>
                <input className="border-2 px-4 py-2" type="text" ref={idRef} />
                <label htmlFor="id">name:</label>
                <input
                  className="border-2 px-4 py-2"
                  type="text"
                  ref={nameRef}
                />
                <button
                  className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg"
                  type="submit"
                >
                  PATCH by Id
                </button>
              </form>
            </div>
          </div>

          <div className="border-2 rounded-lg w-1/2 px-4 py-2 font-semibold">
            Users / Output:
            <ul>
              {users?.map((user) => {
                const { id, name } = user;
                return (
                  <li key={id}>
                    {id}: {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterOnePage;
