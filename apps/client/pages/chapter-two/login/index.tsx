import { signinUserAPI } from '@/api';
import { NextPage } from 'next';
import React, { useRef } from 'react';

const ChapterTwoLoginPage: NextPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="w-full min-h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="w-1/2 p-8 bg-white rounded-lg ">
          <form
            className="flex flex-col gap-2"
            onSubmit={async (e) => {
              e.preventDefault();
              const username = usernameRef?.current?.value;
              const password = passwordRef?.current?.value;

              if (!username || !password) return;

              try {
                const { data } = await signinUserAPI({ username, password });
                console.log(data);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <label className="text-sm capitalize">Username:</label>
            <input
              className="border-2 px-4 py-2 w-100 rounded-lg"
              ref={usernameRef}
            />
            <label className="text-sm capitalize">Password:</label>
            <input
              className="border-2 px-4 py-2 w-100 rounded-lg"
              ref={passwordRef}
            />
            <div className="w-100 flex justify-center mt-2">
              <button
                className="px-4 py-2 w-1/2 bg-blue-600 rounded-lg text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChapterTwoLoginPage;
