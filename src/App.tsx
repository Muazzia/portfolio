import Navbar from "./components/Navbar";

import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f0eeec] md:py-16 font-roboto">
      <div className="md:max-w-6xl md:m-auto md:shadow-2xl sm:rounded-lg rounded-lg">
        <div className="md:hidden">
          <Navbar />
        </div>
        <div className="bg-white rounded-md overflow-hidden">
          <div className="navbar hidden h-[80px] w-full bg-white md:block px-10 pt-7">
            <TopBar />
          </div>
          <div className="flex">
            {/* md:w-[80%] lg:w-[50%] */}
            <div className="hidden bg-white  md:block">
              <LeftBar />
            </div>
            <div className="px-4 md:px-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center py-5">
        <p className="text-sm">&copy; 2024 MUAZ. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default App;
