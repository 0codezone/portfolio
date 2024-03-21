import logo from "../assets/MDLogo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaClipboard } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed w-full flex justify-between items-center px-4 py-2 bg-gray-900 text-gray-100 z-[99]">
      <div>
        <img src={logo} alt="/" width={60} />
      </div>
      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500}>
            {" "}
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            {" "}
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            {" "}
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            {" "}
            Contact
          </Link>
        </li>
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

      <div
        className={
          !showMenu
            ? "hidden"
            : "absolute top-0 w-full h-screen  bg-gray-900 text-gray-100 flex flex-col"
        }
      >
        <ul className="h-[80vh] w-full bg-gray-900 text-gray-100 flex flex-col justify-center items-center gap-5 text-2xl">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About
            </Link>{" "}
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              {" "}
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
        <div className="w-full md:hidden">
          <ul className="flex justify-center gap-2">
            <li className=" bg-blue-800 p-2">
              <a href="#" className="">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className=" bg-black p-2">
              <a href="#" className="">
                <FaGithub size={30} />
              </a>
            </li>
            <li className=" bg-red-700 p-2">
              <a href="#" className="">
                <FaYoutube size={30} />
              </a>
            </li>
            <li className=" bg-pink-700 p-2">
              <a href="#" className="">
                <HiMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul className="w-[150px]">
          <li className="w-full ml-[-100px] hover:ml-0 duration-500 py-1 bg-blue-800">
            <a href="#" className="flex justify-between items-center">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-full ml-[-100px]  hover:ml-0 duration-500 py-1 bg-black">
            <a href="#" className="flex justify-between items-center">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-full ml-[-100px] hover:ml-0 duration-500 py-1 bg-red-700">
            <a href="#" className="flex justify-between items-center">
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-full ml-[-100px] hover:ml-0 duration-500 py-1 bg-pink-700">
            <a href="#" className="flex justify-between items-center">
              Gmail <HiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
