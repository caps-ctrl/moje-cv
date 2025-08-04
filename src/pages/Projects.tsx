import { motion } from "framer-motion";
import { useWidth } from "../components/useWidth";
const projects = [
  {
    id: 1,
    title: "Car-dealership",
    Photo: "dwad",
  },
  {
    id: 2,
    title: "Quiz-app",
    Photo: "dwad",
  },
  {
    id: 3,
    title: "Todo-app",
    Photo: "dwad",
  },
  {
    id: 4,
    title: "Todo-app",
    Photo: "dwad",
  },
];

const Projects = () => {
  const width = useWidth();

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center items-center p-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4">
        {projects.map((projects, index) => {
          return (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              animate={width < 768 ? {} : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,

                scale: { duration: 0.3, type: "spring" },
              }}
              whileHover={{ scale: 1.05 }}
              key={index}
              className=" border-2 rounded-2xl shadow hover:shadow-lg h-80 cursor-pointer overflow-hidden"
            >
              <img
                src={projects.Photo}
                alt={projects.title}
                className="w-full h-[80%]"
              />
              <h2 className="text-xl font-bold text-center border-t  h-[20%] flex items-center justify-center">
                {projects.title}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
