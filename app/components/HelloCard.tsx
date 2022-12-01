export const HelloCard = ({ title, description }: { title: String, description: String }) => (
    <div className="transition-all gradient p-20 max-sm:p-6 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="max-w-lg text-3xl font-bold leading-normal text-white">{title || '...'}</h5>
        <p className="pt-5 text-left text-white">{description || '...'}</p>
    </div>
);
export default HelloCard;
