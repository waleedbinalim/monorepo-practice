import { User } from 'common/types';
import { getUserAPI, postUserAPI } from '../../api';
import { NextPage } from 'next';
import React, { useState } from 'react';

const getUsers = async () => {
  const { data } = await getUserAPI();
  const { users } = data;
  return users;
};

const postUsers = async () => {
  const { data } = await postUserAPI({ name: 'loco' });
  return data;
};

const ChapterOnePage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-xl font-bold">Heres the dumb CRUD you ordered</div>

        <div className="flex flex-col">
          <p className="text-lg">GET REQUEST BELOW</p>
          <div>
            <button
              onClick={async () => {
                const userList = await getUsers();
                setUsers(userList);
              }}
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              GET
            </button>
          </div>
          {/*  */}
          <div>
            <button
              onClick={async () => {
                const newUser = await postUsers();
                setUsers((current) => [...current, newUser]);
              }}
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              POST
            </button>
          </div>
        </div>

        <div>
          Your Users here below:
          <ul>
            {users?.map((user) => {
              const { id, name } = user;
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChapterOnePage;
