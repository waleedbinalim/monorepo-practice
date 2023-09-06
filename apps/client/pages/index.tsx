import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { pageRoutes } from '../constants';

export const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="min-w-[12px] font-bold px-4 py-2 rounded bg-blue-400">
        This is the Hoooommee page
      </button>

      <div>
        Go to{' '}
        <Link href={pageRoutes.chapterOne}>
          <span className="text-blue-500 underline cursor-pointer">
            Chapter One
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
