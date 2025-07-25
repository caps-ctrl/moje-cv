import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold p-4">Skills</h1>
      <div className="flex flex-col items-center">
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
          <p>
            korzystam z Gita do wersjonowania kodu, a GitHuba do hostowania
            projektów i współpracy.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
