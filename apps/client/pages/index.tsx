import { NextPage } from 'next';
import Link from 'next/link';
import { pageRoutes } from '../constants';

const routeAndText: { route: string; text: string }[] = [
  { route: pageRoutes.chapterOne, text: 'Chapter One' },
  { route: pageRoutes.chapterTwo, text: 'Chapter Two' },
  { route: pageRoutes.chapterTwoLogin, text: 'Chapter Two Login' },
];

export const HomePage: NextPage = () => {
  return (
    <div className="px-4 py-2">
      <button className="min-w-[12px] font-bold px-4 py-2 rounded bg-blue-400">
        This is the Hoooommee page
      </button>

      <div className="flex flex-col">
        Go to{' '}
        {routeAndText?.map((item) => {
          const { route, text } = item;
          return (
            <Link href={route} key={route}>
              <span className="text-blue-500 underline cursor-pointer">
                {text}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
