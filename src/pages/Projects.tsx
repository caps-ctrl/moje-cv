import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/ProjectsNotPage";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { useCallback } from "react";
const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  const checkTheme = useCallback(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [checkTheme]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gray-200 to-gray-300 dark:from-gray-900  rounded-2xl dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.Projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-96"
          >
            {/* Project Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="h-full border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer bg-white dark:bg-gray-800 flex flex-col"
              onClick={() =>
                setActiveProject(activeProject === index ? null : index)
              }
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={isDark ? project.PhotoDark : project.Photo}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    View details
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 flex-grow flex flex-col ">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"
                  >
                    <FiExternalLink size={16} />
                    Visit Site
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
              {activeProject === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed  inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setActiveProject(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="bg-white  dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal Header */}
                    <div className="relative h-64 sm:h-72">
                      <img
                        src={isDark ? project.PhotoDark : project.Photo}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                      <button
                        onClick={() => setActiveProject(null)}
                        className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <FiX
                          size={20}
                          className="text-gray-800 dark:text-white"
                        />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>

                      {project.technologies && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2"
                        >
                          <FiExternalLink size={16} />
                          Live Preview
                        </motion.a>

                        {project.GitHub && (
                          <motion.a
                            href={project.GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2"
                          >
                            <FiGithub size={16} />
                            View Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
