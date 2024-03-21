import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-6 pl-4">
            <p className="inline border-b-2 border-[#7dd557] text-4xl font-bold">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-4 gap-8">
          <div className="sm:text-right text-3xl font-bold ">
            <p>I'm Mohit, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a Graduating Student with a passion for coding and web
              development. Skilled in HTML, CSS, and JavaScript, with a focus on
              creating intuitive user interfaces and seamless online
              experiences. Seeking an opportunity to apply classroom learning to
              real-world projects and grow as a professional developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
