import { info } from "console";
import { useEffect, useState } from "react";
import HelloCard from "../components/HelloCard";
import { Profile } from "../components/Profile";
import SocialCard from "../components/SocialCard";
import { Story } from "../components/Story";
import { getInfo } from "../redux/calls";

export const Home = () => {

  const [Info, setInfo] = useState<any>(false)

  const socials = [
    {
      name: 'GitHub',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>,
      link: "https://github.com/davdsm/",
      popular: false,
    },
    {
      name: 'Codepen',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
      ,
      link: "https://codepen.io/davdsm",
      popular: false,
    },
    {
      name: 'Website',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
      ,
      link: "https://www.davdsm.pt",
      popular: true,
    },
    {
      name: 'HackerRank',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
      ,
      link: "https://www.hackerrank.com/TheDavidSamuel?hr_r=1",
      popular: false,
    },
  ]

  const handleInfo = async () => {
    const data = await getInfo();
    setInfo(data)
  }

  useEffect(() => {
    if (!Info) {
      handleInfo()
    }
  }, [Info])


  return (
    <div className="container mx-auto px-4 w-full">
      {Info && (
        <div className="a-delay sm:flex justify-between items-center h-full flex-wrap">
          <div className="entry w-3/5 max-sm:w-full">
            <HelloCard title={Info.find((item: any) => item.key === 'title').value} description={Info.find((item: any) => item.key === 'description').value} />
          </div>
          <div className="entry w-2/6 flex justify-end max-sm:w-full" style={{ height: '430px' }}>
            <Profile name={Info.find((item: any) => item.key === "name").value} work={Info.find((item: any) => item.key === "work").value} img={Info.find((item: any) => item.key === "photo")} />
          </div>
          <div className="mt-10 entry w-2/6 flex justify-end max-sm:w-full">
            <SocialCard socials={socials} />
          </div>
          <div className="mt-10 entry w-3/5 max-sm:w-full">
            <Story />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
