import { NextPage } from 'next';
import React from 'react';
const getUsers = async () => {
  const data = await fetch('http://localhost:3000/api/user', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  console.log(await data.json());
};

const postUsers = async () => {
  const data = await fetch('http://localhost:3000/api/user', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    body: JSON.stringify({ name: 'Jose' }),
  });
  console.log(await data.json());
};

const ChapterOnePage: NextPage = () => {
  return (
    <>
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-xl font-bold">Heres the dumb CRUD you ordered</div>

        <div className="flex flex-col">
          <p className="text-lg">GET REQUEST BELOW</p>
          <div>
            <button
              onClick={() => getUsers()}
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              GET
            </button>
          </div>
          {/*  */}
          <div>
            <button
              onClick={() => postUsers()}
              className="border-green-200 border-2 px-4 py-2 rounded-full"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterOnePage;
