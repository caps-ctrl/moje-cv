import { motion } from "framer-motion";
import { projects } from "../data/ProjectsNotPage";
import { useState } from "react";

const Projects = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center items-center p-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project, index) => (
          <div key={project.id} className="relative min-h-80">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isActive === index
                  ? { height: 200, opacity: 1 }
                  : { opacity: 1, y: 0 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                scale: { duration: 0.3, type: "spring" },
              }}
              whileHover={{ scale: 1.05 }}
              className="border-2 rounded-2xl shadow hover:shadow-lg h-80 cursor-pointer overflow-hidden relative z-10 bg-zinc-900"
              onClick={() => setIsActive(index)}
            >
              <img
                src={project.Photo}
                alt={project.title}
                className="w-full h-[80%] object-cover rounded-t-2xl"
              />
              <h2 className="text-xl font-bold text-center border-t h-[20%] flex items-center justify-center">
                {project.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isActive === index
                  ? { opacity: 1, y: -25 }
                  : { opacity: 0, y: -40 }
              }
              transition={{ duration: 0.4 }}
              className="absolute top-[200px] left-0 w-full h-[145px] bg-red border rounded-2xl z-0 bg-zinc-900"
            >
              <div className="mt-[20px]  text-center text-sm md:text-base text-gray-300">
                <p>{project.description}</p>
                <a href={project.link} target="_blank">
                  <button className="px-6 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900 active:scale-95 cursor-pointer">
                    Przejdz na strone
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
