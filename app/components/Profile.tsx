import Image from 'next/image'
import Photo from '/public/photo.jpg'

export const Profile = () => (

    <div className="w-full bg-white flex flex-col items-center h-full border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center justify-center pb-10 h-full">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Photo} alt="David Photo" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">David</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <a download={true} href="./cv-full.pdf" className="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-white bg-teal-600 rounded-lg hover:bg-teal-400 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800">Resume</a>
                <a href="mailto:geral@davdsm.pt?Subject=From Website" className="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Reach Me</a>
            </div>
        </div>
    </div>

) 