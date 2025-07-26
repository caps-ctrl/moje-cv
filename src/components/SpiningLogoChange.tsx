import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFreeCodeCamp, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const icons = [
  <FaFreeCodeCamp
    className="text-[16rem] dark:text-white text-black"
    key="fcc"
  />,
  <FaReact className="text-[16rem] text-cyan-400" key="react" />,
  <SiTailwindcss className="text-[16rem] text-sky-400" key="tailwind" />,
  <SiFramer
    className="text-[16rem] text-pink-400 origin-center"
    key="framer"
  />,
];

const SpiningLogoChange = () => {
  const [iconIndex, setIconIndex] = useState(0);
  const [isRotating, setRotating] = useState(false);
  const [ischanged, setIsChanged] = useState(false);

  useEffect(() => {
    const pause = 5000;
    const SpiningLogoHandle = () => {
      setRotating(true);
      const timeout2 = setTimeout(() => {
        setRotating(false);

        const timeout1 = setTimeout(() => {
          setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
          setIsChanged(!ischanged);
          return () => {
            clearTimeout(timeout1);
          };
        }, pause / 2);
      }, pause);

      return () => {
        clearTimeout(timeout2);
      };
    };

    SpiningLogoHandle();
  }, [ischanged]);
  return (
    <motion.div
      className="flex justify-center items-center h-full"
      initial={{ opacity: 0, rotate: 0 }}
      animate={
        isRotating ? { rotate: 1800, opacity: 1 } : { rotate: 0, opacity: 0 }
      }
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      {icons[iconIndex]}
    </motion.div>
  );
};

export default SpiningLogoChange;
