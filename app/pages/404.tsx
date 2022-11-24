import Link from "next/link";

export const FourOhFour = () => {
  return (
    <div className="max-sm:px-6 max-sm:py-28 sm:py-64 overflow-hidden bg-slate-100 dark:bg-slate-900 w-full flex justify-center items-center">
      <div
        id="alert-additional-content-5"
        className="entry delay-300 w-96 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-lg dark:border-gray-600 dark:bg-gray-700"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Page not foud.
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
          The requested page is not available right now, please try later or
          feel free going to homepage or portfolio page. If there is anything
          with an error or bug, please contact geral@davdsm.pt
        </div>
        <div className="flex">
          <Link
            href="/"
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="-ml-0.5 mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Go to the Homepage
          </Link>
          <button
            type="button"
            className="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-600 dark:text-gray-300 dark:hover:text-white"
            data-dismiss-target="#alert-additional-content-5"
            aria-label="Close"
          >
            <a href="mailto:geral@davdsm.pt?Subject=There is an error in your portfolio.">
              Report
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
