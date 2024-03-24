import { Link } from "react-router-dom";

const TopBar = () => {
  const data = [
    { text: "Works", logo: "", to: "/work" },
    { text: "Resume", logo: "", to: "/resume" },
    // { text: "Shelf", logo: "" },
  ];
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"}>
        <div className="font-bold text-2xl text-maingrey">Muaz</div>
      </Link>
      <a
        href="mailto:muazzia17@gmail.com"
        className="font-bold text-maingrey rounded-sm hover:bg-[#e45447] hover:text-white hover:px-3 hover:py-[2px] hover:transform hover:-rotate-6 hover:scale-x-105 transition-all"
      >
        Muazzia17@gmail.com
      </a>
      <div className="flex justify-center space-x-4 ">
        {data.map((d, i) => {
          return (
            <Link key={i} to={d.to || ""}>
              <div className="cursor-pointer font-bold text-maingrey rounded-sm hover:bg-[#e45447] hover:text-white hover:px-3 hover:py-[2px] hover:transform hover:-rotate-6 hover:scale-x-105 transition-all">
                {d.text}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
