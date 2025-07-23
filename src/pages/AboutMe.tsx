import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const AboutMe = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ x: 0, opacity: 0 }}
        >
          AboutMe
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
