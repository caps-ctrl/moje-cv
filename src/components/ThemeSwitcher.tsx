import { useTheme } from "./useTheme";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify } from "lucide-react";

export function ThemeSwitcher() {
  const [opened, setOpened] = useState(false);
  const { setTheme } = useTheme();
  return (
    <motion.button
      initial={{ width: "25px", height: "26px" }}
      animate={
        opened
          ? { width: "20vh", height: "22vh" }
          : { width: "25px", height: "26px" }
      }
      whileHover={opened ? {} : { scale: 1.2 }}
      className="  border rounded  absolute z-50"
    >
      <motion.div
        animate={opened ? { rotate: 90 } : {}}
        className=" absolute left-0 top-0  w-6"
      >
        {" "}
        <AlignJustify
          className="cursor-pointer relative z-50"
          onClick={() => {
            setOpened(!opened);
          }}
        ></AlignJustify>
      </motion.div>
      <motion.div
        onClick={() => {
          setTheme("light");
          setOpened(false);
        }}
        className=" h-[32%]  overflow-hidden z-1 flex items-center justify-center dark:bg-slate-800 cursor-pointer dark:hover:bg-slate-700  bg-white  hover:bg-stone-500"
        initial={{ opacity: 0 }}
        animate={opened ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.1,
        }}
      >
        Jasny ☀️
      </motion.div>
      <motion.div
        onClick={() => {
          setTheme("dark");
          setOpened(false);
        }}
        className=" h-[32%]  overflow-hidden z-1 flex items-center justify-center  dark:bg-slate-900 cursor-pointer dark:hover:bg-gray-700  bg-stone-300 hover:bg-stone-500"
        initial={{ opacity: 0 }}
        animate={opened ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.1,
        }}
      >
        Ciemny 🌙
      </motion.div>
      <motion.div
        onClick={() => {
          setTheme("system");
          setOpened(false);
        }}
        className=" h-[32%]  overflow-hidden z-1 flex items-center justify-center dark:bg-slate-800 cursor-pointer dark:hover:bg-slate-700  bg-white hover:bg-stone-500"
        initial={{ opacity: 0 }}
        animate={opened ? { x: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.1,
        }}
      >
        Systemowy🖥️
      </motion.div>
    </motion.button>
  );
}

export default ThemeSwitcher;
