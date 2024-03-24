import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LeftBar = () => {
  return (
    // h-[20%]
    <div className="h-[300px] md:w-[120px] lg:w-[140px] space-y-5 flex flex-col justify-center items-center text-maingrey">
      <a
        href="https://www.linkedin.com/in/muaz-zia-38928325b/"
        className="group"
        target="_blank"
      >
        <FaLinkedin className="group-hover:scale-105" size={"30px"} />
      </a>
      <a href="https://github.com/muazzia" target="_blank" className="group">
        <FaGithub size={"30px"} className="group-hover:scale-105" />
      </a>
      <a href="https://twitter.com/muazzia9" target="_blank" className="group">
        <FaTwitter size={"30px"} className="group-hover:scale-105" />
      </a>
    </div>
  );
};

export default LeftBar;
