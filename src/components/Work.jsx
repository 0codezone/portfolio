import React from "react";
import { data } from "../data/data";

const Work = () => {
  return (
    <div name="work" className="bg-gray-900 text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 py-8 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-3xl inline border-b-4 border-[#7dd557] ">Work</h1>
          <p className="py-4">// Projects I've worked on</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
          {data.map((item) => (
            <div key={item.id} className="rounded-lg cursor-pointer relative">
              <img src={item.image} alt="html" className="rounded-lg " />
              <div className="opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out absolute z-10 justify-center flex flex-col items-center w-full h-full bg-gray-900 border border-gray-600 rounded-lg gap-4 top-0">
                <h2 className="text-2xl">{item.name}</h2>
                <div className="flex gap-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white px-4 py-2 rounded-xl text-gray-800 font-bold hover:bg-[#7dd557]
                    hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white px-4 py-2 rounded-xl text-gray-800 font-bold hover:bg-[#7dd557] hover:text-white"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
