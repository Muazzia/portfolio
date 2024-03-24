import { Link } from "react-router-dom";
import web from "../assets/web.jpg";

const SkillsPage = () => {
  return (
    <>
      <section className="text-left">
        <p className="font-sm capitalize text-3xl md:text-4xl font-bold leading-none text-maingrey">
          My Top Skills
        </p>
        <p className="text-maingrey mt-2">What I Do</p>
        <div className="relative">
          <p className="h-2 w-2 bg-red-700 absolute top-1 rounded-md"></p>
          <p className="w-[80px] absolute top-[6px] h-1 bg-red-700"></p>
        </div>
      </section>
      <section
        className="greybox md:mx-3 bg-[#f2f0ee] px-4 py-3 rounded-md flex justify-center
items-center md:justify-start md:items-start space-y-4 pb-8"
      >
        <div className="flex flex-col space-y-5 mt-3 md:w-1/2 pb-5">
          <div className="text-center text-maingrey font-normal space-y-2">
            <h2 className="text-maingrey font-bold text-lg">BACKEND</h2>
            <p>
              I build Scalable Maintainable Backend applications using
              cutting-edge Technologies like node js Mysql express
            </p>
          </div>
          <div className="text-center text-maingrey font-normal space-y-2">
            <h2 className="text-maingrey font-bold text-lg">FRONTEND</h2>
            <p>
              I build client-side applications with modern features like SPA and
              maintain semantic coding style among other best practices for SEO
              optimisation, using modern tech like React, TailwindCSS.
            </p>
          </div>
          <div className="lg:mt-5 flex justify-center md:justify-normal relative group cursor-pointer h-16 md:h-4">
            <Link
              to={"/work"}
              className="text-maingrey cursor-pointer font-bold absolute z-10 md:left-4 top-5 lg:text-xl"
            >
              See My Work
            </Link>
            <div className="left-[3rem] top-[7px] md:left-0 md:top-0 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] group-hover:w-[150px] bg-[#ecb2ab] rounded-full absolute transition-width duration-300 ease-in-out"></div>
          </div>
        </div>
        <div className="hidden md:block w-1/2 mx-4">
          <img src={web} alt="image" />
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
