import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";

const Navbar = () => {
  const data = [
    { logo: <MdEmail size={"23px"} />, text: "Email", to: "/email" },
    { logo: <MdEmail size={"23px"} />, text: "Resume", to: "/resume" },
    { logo: <IoFolderOpenOutline size={"23px"} />, text: "Blog", to: "/blog" },
    { logo: <BsPersonWorkspace size={"23px"} />, text: "Works", to: "/work" },
  ];
  return (
    <nav className="flex justify-between bg-white px-4 pt-3 font-roboto text-maingrey">
      <Link to={"/"} className="flex justify-center items-center">
        <div className="font-bold text-xl text-maingrey">Muaz</div>
      </Link>
      <div className="">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <GiHamburgerMenu size={"24px"} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div>
              <div className="flex flex-col justify-center space-y-5 mt-10">
                {data.map((d, i) => {
                  return (
                    <>
                      <SheetClose asChild>
                        <Link to={d.to} className="w-fit">
                          <div key={i} className="flex space-x-3 items-center">
                            {d.logo}
                            <p className="text-maingrey font-roboto font-medium">
                              {d.text}
                            </p>
                          </div>
                        </Link>
                      </SheetClose>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="h-[90%] relative">
              <div className="absolute bottom-[150px] flex space-x-6 items-center">
                <a
                  href="https://www.linkedin.com/in/muaz-zia-38928325b/"
                  className="group"
                  target="_blank"
                >
                  <FaLinkedin className="group-hover:scale-105" size={"30px"} />
                </a>
                <a
                  href="https://www.instagram.com/muaz_zia17/"
                  target="_blank"
                  className="group"
                >
                  <FaInstagram
                    size={"30px"}
                    className="group-hover:scale-105"
                  />
                </a>
                <a
                  href="https://github.com/muazzia"
                  target="_blank"
                  className="group"
                >
                  <FaGithub size={"30px"} className="group-hover:scale-105" />
                </a>
                <a
                  href="https://twitter.com/muazzia9"
                  target="_blank"
                  className="group"
                >
                  <FaTwitter size={"30px"} className="group-hover:scale-105" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
