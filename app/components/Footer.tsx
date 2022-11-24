import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = ({ menu, handleDark }) => {
  const year = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer className="container mx-auto px-4 sm:py-10 z-40 relative max-sm:py-5">
      <div className="p-4 bg-white rounded-lg drop-shadow-2xl md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <Link href="/" className="hover:underline">
            David
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="item center flex">
            <button
              onClick={handleDark}
              className="mr-4 text-slate-900 dark:text-slate-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </li>
          {menu.map((item: any, index: number) => (
            <li key={index}>
              <Link href={item.path} className={`${router.pathname === item.path ? 'font-bold' : ''} mr-4 hover:underline md:mr-6`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
