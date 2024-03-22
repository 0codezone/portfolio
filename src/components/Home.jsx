import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const openResume = () => {
    window.open("/UpdatedResume.pdf", "_blank");
  };
  return (
    <div name="home" className="bg-gray-900 h-screen">
      <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
        <p className="text-[#7dd557] pb-2">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl text-blue-50 font-bold">
          Mohit Darji
        </h1>
        <h2 className="text-3xl sm:text-5xl text-blue-50/80 font-bold">
          I'm a Frontend Developer.
        </h2>
        <p className="text-blue-50/80 py-4 max-w-[600px]">
          I'm a Frontend Developer based in India. I have a strong foundation in
          web development, and I am always looking to learn more and improve my
          skills.
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <Link to="work" smooth={true} duration={500}>
            <button className="flex items-center gap-3 text-white border-2 px-5 py-2 hover:bg-[#7dd557] hover:border-[#7dd557] duration-300 group">
              View Work
              <HiArrowRight className="group-hover:rotate-90 duration-300 " />
            </button>
          </Link>

          <button
            className="flex items-center gap-3 text-white border-2 px-5 py-2 hover:bg-[#7dd557] hover:border-[#7dd557] duration-300 group"
            onClick={openResume}
          >
            Resume
            <HiArrowRight className=" group-hover:translate-x-[20px] duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
