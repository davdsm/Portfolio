
export const SocialCard = ({ socials }: { socials: Array<object> }) => (
    <div className="sm:h-96 max-sm:mt-6 w-full p-4 bg-white border rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Social Networks
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Check my work at the options available.</p>
        <ul className="my-4 space-y-3">
            {socials.map((item: any, index: number) => (
                <li key={index}>
                    <a target="_blank" rel="noreferrer" href={item.link} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        {item.icon}
                        <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                        {item.popular && (
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        )}
                    </a>
                </li>
            ))
            }
        </ul>
        <div>
            <a href="mailto:geral@davdsm.pt?Subject=From Website" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Find me on my email also geral@davdsm.pt</a>
        </div>
    </div>

);
export default SocialCard;
