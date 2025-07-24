import React from "react";

const AboutMe = () => {
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

      <div></div>
    </div>
  );
};

export default AboutMe;
