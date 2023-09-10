import { signinUserAPI } from '@/api';
import { NextPage } from 'next';
import React, { useRef } from 'react';

const ChapterTwoLoginPage: NextPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <>
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
        <label>username</label>
        <input className="border-2 px-4 py-2 w-1/2" ref={usernameRef} />
        <label>password</label>
        <input className="border-2 px-4 py-2 w-1/2" ref={passwordRef} />
        <button className="px-4 py-2 w-1/2 bg-blue-600" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ChapterTwoLoginPage;
