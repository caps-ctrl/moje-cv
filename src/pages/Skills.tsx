import { FaReact, FaGithub, FaMobileAlt } from "react-icons/fa";
import { SiRedux, SiTypescript, SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";
import { skillsData } from "../data/SkillData";

const icons = [
  <FaMobileAlt className="text-5xl text-green-500" title="Responsywność" />,
  <FaReact className="text-5xl text-cyan-400 animate-spin" title="React" />,
  <SiRedux className="text-5xl text-purple-500" title="Redux" />,
  <SiTypescript className="text-5xl text-blue-600" title="TypeScript" />,
  <SiReactrouter className="text-5xl text-red-500" title="React Router" />,
  <FaGithub
    className="text-5xl text-gray-800 dark:text-gray-200"
    title="GitHub"
  />,
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 caret-transparent">
      <h1 className="text-4xl font-bold text-center mb-8">💻 Skills</h1>

      {/* Ikony */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Lista umiejętności */}
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
        Technologie, z którymi pracuję na co dzień:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
