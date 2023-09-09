import {
  CreateUserSection,
  GetUserByIdSection,
  GetUsersSection,
  PatchUserSection,
} from '@/components';
import { User } from 'common/types';
import { NextPage } from 'next';
import { useState } from 'react';

const ChapterOnePage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-xl font-bold mb-8">Heres a sample CRUD below:</div>

        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 w-1/2 px-4 py-2">
            <GetUsersSection setUsers={setUsers} />
            <GetUserByIdSection setUsers={setUsers} />
            <CreateUserSection setUsers={setUsers} />
            <PatchUserSection setUsers={setUsers} />
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
