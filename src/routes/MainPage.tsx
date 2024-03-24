import LandingPage from "@/components/LandingPage";
import ResumeBox from "@/components/ResumeBox";
import SkillsPage from "@/components/SkillsPage";
import WorkPage from "@/components/WorkPage";

import { FaInstagram } from "react-icons/fa";

const MainPage = () => {
  return (
    <>
      <main className="space-y-9  bg-white rounded-md pb-10">
        <LandingPage />
        <SkillsPage />
        <section>
          <p className="font-sm capitalize text-3xl md:text-4xl font-bold leading-none text-maingrey">
            My Works
          </p>
          <p className="text-maingrey mt-2">Few of My Projects</p>
          <div className="relative">
            <p className="h-2 w-2 bg-red-700 absolute top-1 rounded-md"></p>
            <p className="w-[150px] absolute top-[6px] h-1 bg-red-700"></p>
          </div>
        </section>
        <WorkPage />
        <ResumeBox />
        <section className="mt-5 flex flex-col justify-center items-center">
          <p className="font-bold text-maingrey">Keep In Touch</p>
          <p className="font-bold text-lg text-maingrey mt-4">
            muazzia17@gmail.com
          </p>
          <div className="mt-4">
            <a
              href="https://www.instagram.com/muaz.shah16/"
              target="_blank"
              className="group"
            >
              <FaInstagram size={"30px"} className="group-hover:scale-105" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
