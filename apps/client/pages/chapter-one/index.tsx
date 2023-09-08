import { User } from 'common/types';
import { getUserAPI, getUserByIdAPI, postUserAPI } from '../../api';
import { NextPage } from 'next';
import React, { useRef, useState } from 'react';
// import { isAxiosError } from 'axios';

const getUsers = async () => {
  try {
    const { data } = await getUserAPI();
    const { users } = data;
    return users;
  } catch (error) {
    // if (isAxiosError(error)) {
    //   const { response } = error;
    //   console.log('WE HERE');
    //   console.log(response);
    //   console.log(response?.data?.statusCode);
    // }
    throw 'Error Ocurred';
  }
};

const getUserById = async (id: string | number) => {
  try {
    const { data } = await getUserByIdAPI(id);
    return data;
  } catch (error) {
    // if (isAxiosError(error)) {
    //   const { response } = error;
    //   console.log('WE HERE');
    //   console.log(response);
    //   console.log(response?.data?.statusCode);
    // }
    throw 'Error Ocurred';
  }
};

const postUsers = async () => {
  try {
    const { data } = await postUserAPI({ name: 'loco' });
    return data;
  } catch (error) {
    throw 'Unknown Error Ocurred';
  }
};

const ChapterOnePage: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const idRef = useRef<any>(null);
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
                console.log('userList');
                setUsers(userList);
              }}
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              GET
            </button>
          </div>
          {/*  */}

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const id = idRef.current?.value;
              const user = await getUserById(id);
              setUsers([user]);
            }}
          >
            <input type="text" ref={idRef} />
            <button
              type="submit"
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              Submit
            </button>
          </form>

          <div>
            <button
              onClick={async () => {
                const newUser = await postUsers();
                // if (newUser) {
                setUsers((current) => [...current, newUser]);
                // }
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
