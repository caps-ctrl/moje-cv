import React from "react";
import WritingText from "../components/WritingText";
const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-8  ">
        Cześć! Jestem Marcel. Tworze nowoczesne aplikacje webowe w React i
        TypeScript.{" "}
      </h1>
      <div className="flex justify-evenly items-center p-4 border-gray-400">
        <div className="w-[50%] flex flex-col text-left  gap-y-6 text-2xl  font-['fira sanss'] font-bold text-gray-800 border-r-2  ">
          <h2></h2>
          <div className="flex flex-col gap-y-4 p-4 dark:text-gray-100">
            <p>
              Jestem Marcel — junior React developer z głową pełną pomysłów 💡 i
              kodem gotowym do działania . Uwielbiam tworzyć nowoczesne
              aplikacje 🌐, które nie tylko działają sprawnie , ale też ładnie
              wyglądają 🎨.
            </p>
            <p>
              Na co dzień pracuję z Reactem, TypeScript, TailwindCSS i Framer
              Motion 🛠️ — a teraz wkraczam w świat Reduxa 🧠!
            </p>
            <p>
              Chcesz zobaczyć, co potrafię? 👀 Zerknij na moje projekty albo po
              prostu napisz — chętnie pogadamy! ☕
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center p-4">
          <div>
            <WritingText></WritingText>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4 p-8">
          {/* Animowana ikona */}
          <svg
            className="animate-bounce w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          {/* Przycisk pobierania CV */}
          <a
            href="/cv.pdf"
            download
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Pobierz CV
          </a>
          {/* Cytat */}
          <blockquote className="italic text-gray-400 mt-2">
            "Kod to poezja logiczna."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
