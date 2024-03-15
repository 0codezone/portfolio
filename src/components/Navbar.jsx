import logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-gray-100">
      <div>
        <img src={logo} alt="/" width={50} />
      </div>
      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* mobile view ------------------------- */}
      <div
        className="md:hidden z-10"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {!showMenu ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !showMenu
            ? "hidden"
            : "absolute top-0 left-0 h-[100vh] w-full bg-gray-900 text-gray-100 flex flex-col justify-center items-center gap-5 text-2xl"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
