import { useState } from "react";
import ModalProject from "./ModalProyect";
import { BiInfoCircle, BiSearch } from "react-icons/bi";
import data from "../data/data.json";

export default function Proyects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const baseClass =
    "transform translate-y-full transition duration-500 ease absolute w-full h-full transparent-color z-50";
  const activeClass =
    "transform translate-y-0 transition duration-500 ease absolute w-full h-full transparent-color z-50";

  return (
    <>
      <h2 className="text-center text-2xl xl:text-5xl" id="proyects">Proyectos</h2>
      <h3 className="text-center text-xl xl:text-3xl sec-color">
        Inspirados en otras apps
      </h3>
      <h4 className="text-center text-md xl:text-sm sec-color animate-pulse overflow-hidden">
        ¡También hay proyectos originales!
      </h4>

      <section  className="h-auto xl:h-dvh">
        {/* grid displayer */}
        <div className="grid grid-rows-[420px] auto-rows-[420px] md:grid-rows-[420px]   grid-cols-1 m-10 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:m-4 p-2">
          {data.map((project) => {
            const isHover =    hoveredId === project.id ? activeClass : baseClass;

            return (
              <div
                key={project.id}
                className="proyect__component h-full w-full shadow-color rounded-xl transform hover:scale-105 duration-500 ease-in"
              >
                {/* Contenedor imagen */}
                <div
                  className="flex image__container h-[75%] md:h-[70%]  overflow-hidden rounded-t-xl relative"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className={isHover}>
                    <div className="m-auto flex items-center justify-center w-full h-full gap-5">
                      <BiInfoCircle
                        className="main-color h-8 w-8 transform hover:scale-110 duration-500 ease-in cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      />
                      <a href={project.link} target="_blank"><BiSearch className="main-color h-8 w-8 transform hover:scale-110 duration-500 ease-in cursor-pointer" /></a>
                    </div>
                  </div>
                </div>

                {/* Info texto */}
                <div className="w-full h-[40%] p-5 overflow-y-hidden relative">
                  <p className="text-gray-300">{project.desc}</p>
                  {/* tags */}
                  <div className="flex scroll-tags w-fit h-10  absolute mt-2 gap-2">
                    {project.technologi.map((tech, index) => (
                      <div
                        key={index}
                        className="p-1 border rounded-md main-color bg-color whitespace-nowrap transform hover:scale-110 transition duration-200 ease-in"
                      >
                        <small>{tech}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Modal dinámico */}
          {selectedProject && (
            <ModalProject
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </section>
    </>
  );
}
