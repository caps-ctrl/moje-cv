import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      (e.target as HTMLFormElement).submit(); // ręcznie wyślij formularz
    }, 1000); // 1s opóźnienie
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-4xl font-semibold mb-6">Kontakt</h1>
      <p className="mb-4 text-lg text-center">
        Masz pytania lub chcesz nawiązać współpracę? Napisz do mnie!
      </p>
      <form
        action="https://formsubmit.co/gusiew9@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <input
          name="name"
          type="text"
          placeholder="Imię"
          required
          className="p-2 rounded border border-gray-300 dark:bg-gray-700"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-2 rounded border border-gray-300 dark:bg-gray-700"
        />
        <textarea
          name="message"
          placeholder="Wiadomość"
          required
          className="p-2 rounded border border-gray-300 dark:bg-gray-700 min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Wyślij
        </button>
        {sent && (
          <span className="text-green-600 text-center">Wiadomość wysłana!</span>
        )}
      </form>
      <div className="flex gap-8 mt-8 text-3xl">
        <a
          href="https://github.com/caps-ctrl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
