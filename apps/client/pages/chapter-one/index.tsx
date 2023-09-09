import { User } from 'common/types';
import {
  getUserAPI,
  getUserByIdAPI,
  patchUserAPI,
  postUserAPI,
} from '../../api';
import { NextPage } from 'next';
import React, { useRef, useState } from 'react';
import { handleAPIError } from '../../utils/helpers';
import { errMessages } from '../../constants';

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
  const nameRef = useRef<any>(null);
  const idRef = useRef<any>(null);
  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-xl font-bold mb-8">Heres a sample CRUD below:</div>

        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 w-1/2 px-4 py-2">
            <button
              onClick={async () => {
                const userList = await getUsers();
                console.log('userList');
                setUsers(userList);
              }}
              className="text-white bg-blue-600 px-4 py-2 rounded-lg"
            >
              GET Users
            </button>

            <form
              className="flex flex-col gap-1"
              onSubmit={async (e) => {
                e.preventDefault();
                const id = idRef.current?.value;
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

            <div className="w-full">
              <form
                className="flex flex-col gap-1"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const name = nameRef.current.value;
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
                  const id = idRef.current.value;
                  const name = nameRef.current.value;
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
