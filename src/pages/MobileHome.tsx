const MobileHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-4 ">
        Jestem Marcel. Tworze nowoczesne aplikacje webowe
      </h1>
      <div className={"flex justify-evenly items-center  border-gray-400"}>
        <div
          className={
            "w-[80%] flex flex-col text-center  gap-y-6 text-xl  font-['fira sanss'] font-bold text-gray-800  "
          }
        >
          <div className={"flex flex-col gap-y-4  dark:text-gray-100"}>
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

export default MobileHome;
