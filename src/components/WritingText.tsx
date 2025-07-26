import { useEffect, useState } from "react";

const TEXT = [
  "<div>Duży div</div>",
  "<button onClick={naprawBuga}>Napraw mnie</button>",
  "<input type='text' placeholder='Twoja dusza tu...' />",
  "<h1>Hello darkness, my old bug</h1>",
  "<p>Ten kod nie jest komentowany, tylko zaklęty</p>",
  "<form>Wyślij do nikąd</form>",
  "<code>100% działa. Prawie.</code>",
  "<nav>Gdzie ja jestem?</nav>",
  "<section>Przestrzeń na błędy</section>",
  "<footer>Stworzono o 3:00 nad ranem</footer>",
  "<article>To nie bug, to feature</article>",
  "<aside>To miał być tylko test</aside>",
  "<span>Nie klikaj tu...</span>",
  "<main>Błędy główne</main>",
  "<pre>To jest tak brzydki kod, że aż ładny</pre>",
  "<script>alert('Debug time')</script>",
  "<label>Junior z sercem seniorskiego debugowania</label>",
  "<textarea>Ctrl + Z... Ctrl + Z...</textarea>",
  "<header>// Po co mi testy, skoro działa?</header>",
];
const WritingText = () => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(
    (time = 150, stop = 500) => {
      let timeout = 0;

      if (!isDeleting && index < TEXT[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(TEXT[textIndex].slice(0, index + 1));
          setIndex(index + 1);
        }, time / 2); // czas pisania
      } else if (!isDeleting && index === TEXT[textIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), stop); // pauza po napisaniu
      } else if (isDeleting && index > 0) {
        timeout = setTimeout(() => {
          setDisplayed(TEXT[textIndex].slice(0, index - 1));
          setIndex(index - 1);
        }, time / 3); // czas usuwania
      } else if (index === 0 && isDeleting) {
        timeout = setTimeout(() => setIsDeleting(false), stop);
        setTextIndex(() => Math.floor(Math.random() * TEXT.length)); // pauza po usunięciu
      }

      return () => clearTimeout(timeout);
    },
    [index, isDeleting]
  );

  return (
    <div className="text-green-500 text-3xl font-mono whitespace-pre-wrap bg-gray-800 p-4 rounded-lg shadow-lg">
      {displayed}
      <span style={{ borderRight: "2px solid" }}>&nbsp;</span>
    </div>
  );
};

export default WritingText;
