import gamehub from "../assets/gamehub.png";
import bank from "../assets/bank.png";
import sounddesign from "../assets/sounddesign.png";
import social from "../assets/social.png";
import Payment from "./Payment";

const WorkPage = () => {
  const data = [
    { logo: gamehub, href: "https://game-hub-muazzia.vercel.app/" },
    { logo: sounddesign, href: "https://sound-design.vercel.app/" },
    { logo: social, href: "https://social-blond-seven.vercel.app/home" },
    { logo: bank, href: "https://bank-website-ebon.vercel.app/" },
  ];
  return (
    <section className="my-5">
      <p className="font-sm capitalize text-2xl md:text-4xl font-bold leading-none text-maingrey">
        Web Appliactions
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-5 md:px-4 gap-y-4 md:gap-y-7 md:gap-x-4  ">
        {data.map((d, i) => {
          return (
            <a key={i} href={d.href} target="_blank" className="group ">
              <div className="transition-all md:group-hover:scale-105  rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <img src={d.logo} alt="" className="" />
              </div>
            </a>
          );
        })}
      </div>
      <div className="mt-10">
        <Payment />
      </div>
    </section>
  );
};

export default WorkPage;
