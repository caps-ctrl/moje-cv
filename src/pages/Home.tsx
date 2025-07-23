import React from "react";
import WritingText from "../components/WritingText";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center   ">
        Cześć! Jestem Marcel. Tworze nowoczesne aplikacje webowe w React i
        TypeScript.{" "}
      </h1>

      <div className="flex justify-evenly items-center p-4">
        <div className="w-[50%] flex flex-col text-left text-lg gap-y-6 text-xl leading-8">
          <h2></h2>

          <p>
            Jestem Marcel — junior React developer z głową pełną pomysłów i
            kodem gotowym do działania. Uwielbiam tworzyć nowoczesne aplikacje,
            które nie tylko działają sprawnie, ale też ładnie wyglądają.
          </p>
          <p>
            Na co dzień pracuję z Reactem, TypeScript, TailwindCSS i Framer
            Motion — a teraz wkraczam w świat Reduxa!
          </p>
          <p>
            Chcesz zobaczyć, co potrafię? Zerknij na moje projekty albo po
            prostu napisz — chętnie pogadamy!
          </p>
        </div>
        <div className="w-[50%]">
          <WritingText></WritingText>
        </div>
      </div>
    </div>
  );
};

export default Home;
