import { useEffect, useState } from "react";
import { TEXT } from "../data/Text";

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
        }, time / 2);
      } else if (!isDeleting && index === TEXT[textIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), stop);
      } else if (isDeleting && index > 0) {
        timeout = setTimeout(() => {
          setDisplayed(TEXT[textIndex].slice(0, index - 1));
          setIndex(index - 1);
        }, time / 3);
      } else if (index === 0 && isDeleting) {
        timeout = setTimeout(() => setIsDeleting(false), stop);
        setTextIndex(() => Math.floor(Math.random() * TEXT.length));
      }

      return () => clearTimeout(timeout);
    },
    [index, isDeleting]
  );

  return (
    <div className="text-green-500 text-3xl font-mono whitespace-pre-wrap dark:bg-gray-800  bg-gray-200 p-4 rounded-lg shadow-lg">
      {displayed}
      <span style={{ borderRight: "2px solid" }}>&nbsp;</span>
    </div>
  );
};

export default WritingText;
