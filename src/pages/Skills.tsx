import React from "react";
import { FaReact, FaGithub, FaMobileAlt } from "react-icons/fa";
import { SiRedux, SiTypescript, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const icons = [
    <FaMobileAlt className="text-5xl text-green-500" title="Responsywność" />,
    <FaReact className="text-5xl text-cyan-400 animate-spin" title="React" />,
    <SiRedux className="text-5xl text-purple-500" title="Redux" />,
    <SiTypescript className="text-5xl text-blue-600" title="TypeScript" />,
    <SiReactrouter className="text-5xl text-red-500" title="React Router" />,
    <FaGithub
      className="text-5xl text-gray-800 dark:text-gray-200"
      title="GitHub"
    />,
  ];
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold p-4">Skills</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {icons.map((icon, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="m-2"
              >
                {icon}
              </motion.div>
            );
          })}
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 p-4">
          Technologie, z którymi pracuję na co dzień to:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 p-4">
          <li className="font-bold text-2xl ">Responsywność i RWD</li>
          <p className="mb-5">
            dbam o to, aby moje aplikacje działały dobrze na każdej wielkości
            ekranu.
          </p>
          <li className="font-bold text-2xl ">React and Redux</li>
          <p className="mb-5">
            moja główna biblioteka do tworzenia aplikacji frontendowych. Znam
            JSX, komponenty funkcyjne, propsy, hooki oraz podstawy zarządzania
            stanem.
          </p>
          <li className="font-bold text-2xl ">TypeScript </li>
          <p className="mb-5">
            używam go w projektach Reactowych, co pozwala mi pisać bardziej
            niezawodny i przewidywalny kod.
          </p>
          <li className="font-bold text-2xl ">React Router</li>
          <p className="mb-5">
            wykorzystuję do budowy aplikacji SPA i zarządzania trasami.
          </p>
          <li className="font-bold text-2xl ">Git i GitHub</li>
          <p className="mb-5">
            korzystam z Gita do wersjonowania kodu, a GitHuba do hostowania
            projektów i współpracy.
          </p>
          <li className="font-bold text-2xl ">Framer Motion</li>
          <p className="mb-5">
            Korzystam z tej biblioteki do animacji w React, aby dodawać płynne i
            nowoczesne efekty przejść i interakcji.
          </p>
          <li className="font-bold text-2xl ">Praca zespołowa i feedback</li>
          <p className="mb-5">
            Nie boję się prosić o pomoc, dzielić wiedzą ani przyjmować
            konstruktywnego feedbacku – to naturalna część rozwoju.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
// filepath: c:\Users\marcel\Projects\myCV\src\pages\Skills.tsx
