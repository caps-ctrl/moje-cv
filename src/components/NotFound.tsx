import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-2xl mt-4">Strona nie została znaleziona</p>
      <p className="text-lg mt-2 opacity-80">
        Sprawdź adres lub wróć na stronę główną
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-2xl shadow-lg hover:bg-gray-200 transition"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
};

export default NotFound;
