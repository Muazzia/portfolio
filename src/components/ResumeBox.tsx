import { Link } from "react-router-dom";

const ResumeBox = () => {
  return (
    <section className="max-w-xl shadow-2xl h-40 py-5 px-5 md:px-10 mt-10 md:flex md:justify-start md:items-center relative ">
      <p className="text-lg font-bold mb-3 md:mb-0 text-maingrey">
        I cook with These Ingredients
      </p>
      <Link to={"/resume"} className=" relative w-1/3 group md:ml-4">
        <div className="transition-all w-[60px] h-[60px] group-hover:w-[135px] bg-orange-700 rounded-full absolute top-5 md:top-[-30px]"></div>
        <div className="transition-all font-bold text-sm md:text-lg absolute group-hover:text-white text-black top-[40px] md:top-[-14px] left-8  md:left-[18px] capitalize  w-[100px] ">
          My Resume
        </div>
      </Link>
    </section>
  );
};

export default ResumeBox;
