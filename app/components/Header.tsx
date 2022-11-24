import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "/public/favicon.png";
import Link from "next/link";

export const Header = ({ menu, handleDark }) => {
  const [Hamburger, setHamburger] = useState(false);
  const router = useRouter();

  return (
    <header className="entry container mx-auto px-4 sm:py-10 z-40 relative max-sm:py-5">
      <Head>
        <title>David Magalhães</title>
        <meta
          name="description"
          content="FullStack Web Developer with 7 years of experience."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="order-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center w-8/12 lg:w-9/12">
            <Image
              src={Logo}
              className=" mr-3 sm:h-9"
              alt="David Logo"
              width={38}
              height={30}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              David
            </span>
          </Link>
          <button
            onClick={handleDark}
            className="text-slate-900 dark:text-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setHamburger(!Hamburger)}
          // onBlur={() => setHamburger(false)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className={`${!Hamburger && "hidden"
              } entry w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menu.map((item: any, index: number) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`${router.pathname === item.path
                      ? "md:text-teal-400 bg-teal-400 "
                      : "text-gray-700"
                      } block py-2 pl-3 pr-4 font-bold rounded md:bg-transparent md:p-0 dark:text-white`}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
