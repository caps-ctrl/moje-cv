import SpiningLogoChange from "../components/SpiningLogoChange";
import { useWidth } from "../components/useWidth";
const AboutMe = () => {
  const width = useWidth();
  return (
    <div>
      <h1 className="text-3xl font-bold flex justify-center items-center">
        O mnie
      </h1>
      <div className="text-center">
        <p className="p-4 text-2xl">
          Cześć! Jestem młodym, ambitnym programistą na początku swojej drogi.
          Niedawno dostałem się na studia inżynierskie na kierunku informatyka i
          aktywnie rozwijam swoje umiejętności w tworzeniu nowoczesnych
          aplikacji webowych.
        </p>
        <p className="p-4 text-2xl">
          Pracuję głównie z React, Tailwind CSS, Redux i Framer Motion. Moja
          pasja do programowania zaczęła się dzięki znajomemu, który pokazał mi,
          że samymi umiejętnościami i determinacją można osiągnąć sukces – nawet
          bez formalnych certyfikatów czy papierów. To zmotywowało mnie do
          działania.
        </p>
        <p className="p-4 text-2xl">
          Codziennie uczę się czegoś nowego, tworzę projekty i rozwijam się, by
          w przyszłości zostać pełnoprawnym programistą, który tworzy
          wartościowe i funkcjonalne aplikacje.
        </p>
      </div>
      <h2 className="text-4xl  text-center font-semibold p-4">Moja droga</h2>
      <div>
        <div className="flex justify-between items-center p-8">
          {" "}
          <div className="flex flex-col items-center mt-8">
            <div className="text-left w-[80%]">
              <ol className="relative border-l-4 border-green-400">
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-400 rounded-full -left-3 ring-8 dark:ring-white  ring-gray-500"></span>
                  <h3 className="font-bold text-lg">2024.06.12</h3>
                  <p>
                    Rozpoczęcie nauki programowania za pomoca platformy
                    freecodeCamp
                  </p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-400 rounded-full -left-3 ring-8 dark:ring-white ring-gray-500"></span>
                  <h3 className="font-bold text-lg">2024.10.19</h3>
                  <p>Pierwsze projekty w React i poznanie Tailwind CSS</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-400 rounded-full text-black -left-3 ring-8 dark:ring-white  ring-gray-500"></span>
                  <h3 className="font-bold text-lg">2025.01.02</h3>
                  <p>Odstawienie programowania na bok na rzecz matury</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-400 rounded-full -left-3 ring-8 dark:ring-white  ring-gray-500"></span>
                  <h3 className="font-bold text-lg">2025.07.16</h3>
                  <p>
                    Przyjęcie na studia inżynierskie na kierunku informatyka
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-green-400 rounded-full  -left-3 ring-8 dark:ring-white  ring-gray-500"></span>
                  <h3 className="font-bold text-lg">2025.07.24</h3>
                  <p>Rozwijanie portfolio, nauka Reduxa i Framer Motion</p>
                </li>
              </ol>
            </div>
          </div>
          <div
            className={
              width < 768
                ? "hidden"
                : "w-[40%] flex justify-center items-center"
            }
          >
            <SpiningLogoChange></SpiningLogoChange>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
