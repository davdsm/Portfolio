import { Project } from "../components/Project";

export const Portfolio = () => {
    const data = [
        {
            name: "Impero Victoria",
            cover: "https://davdsm.pt/wp-content/uploads/2022/06/post35.png",
            description: "Printed clothes looking perfect for years, guaranteeing a seamless design replication. Quality and constant innovation are our main core: we don't strive for anything less than the best.",
            stack: ["Wordpress", "Ubuntu", "Nginx", "Docker"],
            link: "https://imperovictoria.com/"
        },
        {
            name: "Appybbok",
            cover: "https://davdsm.pt/wp-content/uploads/2022/05/1-3.png",
            description: "Find the best healthcare professionals and save time when booking your appointment. Modern, simple and intuitive. One click to find out!",
            stack: ["React", "StyledComponents", "Webpack", "Docker"],
            link: "https://www.appybook.com/"
        },
        {
            name: "A par da idade APP",
            cover: "https://davdsm.pt/wp-content/uploads/2022/06/post-app.jpeg",
            description: "The management of human resources within 'A Par da Idade' is now done through a mobile application, designed and developed by DAVDSM.",
            stack: ["Ionic", "StyledComponents", "React", "Android", "iOS"],
            link: "https://play.google.com/store/apps/details?id=davdsm.a.par.da.idader&hl=pt-PT"
        },
        {
            name: "Seekers Club",
            cover: "https://davdsm.pt/wp-content/uploads/2022/06/1-1.png",
            description: "Invest in your personal development, reach your true potential and enjoy your life to the fullest.",
            stack: ["Wordpress", "Ubuntu", "Nginx", "Docker"],
            link: "https://seekersclub.com/"
        }
    ]
    return (
        <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 grid-flow-row gap-14 a-delay max-sm:flex-flow-col">
                {data.map((item, index) => (
                    <Project key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
