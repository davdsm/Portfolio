import Image from "next/image";
import env from '../.env.json';

export const Project = ({ item }: { item: any }) => (
    <div className="entry mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        < a href={item.link} target="_blank" rel="noreferrer" >
            <Image width={500} height={200} className="rounded-t-lg" src={`${env.api}/api/files/${item.collectionId}/${item.id}/${item.image}`} alt="" />
        </a >
        <div className="px-5 py-2">
            {item.expand.techs.map((tech: any, index: any) => <span key={index} className="text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" style={{ backgroundColor: `${tech.color}` }}>{tech.name}</span>)}
        </div>
        <div className="px-5 pb-5">
            <a href={item.link} target="_blank" rel="noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div >
)