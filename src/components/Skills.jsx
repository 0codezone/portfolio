import React from "react";
import Html from "../assets/html.png";
import css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import aws from "../assets/aws.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/html.png";
import mongodb from "../assets/mongo.png";
import bootstrap from "../assets/html.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-gray-900 text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-3xl inline border-b-4 border-[#7dd557] ">
            Skills
          </h1>
          <p className="py-4">
            // These are the Technologies and Tool I've worked with{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={Html} alt="html" width={60} />
            <h2>HTML</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={css} alt="css" width={60} />
            <h2>CSS</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={JavaScript} alt="JavaScript" width={60} />
            <h2>JavaScript</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={aws} alt="aws" width={60} />
            <h2>AWS</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={firebase} alt="firebase" width={60} />
            <h2>Firebase</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={github} alt="github" width={60} />
            <h2>GitHub</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={react} alt="react" width={60} />
            <h2>React</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={tailwind} alt="tailwind" width={60} />
            <h2>Tailwind</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={node} alt="node" width={60} />
            <h2>Node</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={express} alt="express" width={60} />
            <h2>Express</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={mongodb} alt="mongodb" width={60} />
            <h2>MongoDB</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src={bootstrap} alt="bootstrap" width={60} />
            <h2>Bootstrap</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src="#" width={60} />
            <h2>...</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src="#" width={60} />
            <h2>...</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-gray-800/50 py-4 shadow-xl rounded">
            <img src="#" width={60} />
            <h2>...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
