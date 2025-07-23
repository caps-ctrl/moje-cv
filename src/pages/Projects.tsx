import React from "react";

const projects = [
  {
    title: "Car-dealership",
    Photo: "dwad",
  },
  {
    title: "Quiz-app",
    Photo: "dwad",
  },
  {
    title: "Todo-app",
    Photo: "dwad",
  },
  {
    title: "Todo-app",
    Photo: "dwad",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-4">
        {projects.map((projects, index) => {
          return (
            <div
              key={index}
              className="p-4 border rounded-xl shadow hover:shadow-lg h-80"
            >
              <img
                src={projects.Photo}
                alt={projects.title}
                className="w-full h-[80%]"
              />
              <h2 className="text-xl font-bold text-center border-t bg-red-200 h-[20%] flex items-center justify-center">
                {projects.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
