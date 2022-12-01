import { useEffect, useState } from "react";
import { Project } from "../components/Project";
import getPortfolio from "../redux/calls";

export const Portfolio = () => {
    const [Portfolio, setPortfolio] = useState<any>(false)

    const handlePortfolio = async () => {
        const data = await getPortfolio();
        setPortfolio(data)
    }

    useEffect(() => {
        if (!Portfolio) {
            handlePortfolio()
        }
    }, [Portfolio])

    return (
        <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 grid-flow-row gap-14 a-delay max-sm:flex-flow-col">
                {Portfolio && Portfolio.map((item: Object, index: any) => (
                    <Project key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
