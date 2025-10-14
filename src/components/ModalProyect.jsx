export default function ModalProject({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999] overflow-y-auto ">
      <div className="no-scroll-bar bg-color shadow-color rounded-2xl h-[90%] w-[90%] md:w-[90%] md:h-[90%]} p-6 relative transform scale-100 opacity-100 transition-all duration-300 overflow-y-auto z-50">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:scale-110 transition-transform duration-200"
        >
          ✖
        </button>

        {/* Contenido */}
        <h2 className="text-2xl sec-color  font-bold mb-3">{project.title}</h2>

        <div className="image__container w-90% h-120 mb-4">
            <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full h-full object-contain "
        />
        </div>

        <p className="sec-color text-xl mb-3">{project.desc}</p>
        <p>{project.subDesc}</p>

        <div className="flex flex-wrap gap-2 text-sm main-color">
          <strong className="w-full">Tecnologías:</strong>
          {Array.isArray(project.technologi) ? (
            project.technologi.map((tech, index) => (
              <span
                key={index}
                className="p-1 px-2 border rounded-md main-color bg-color whitespace-nowrap"
              >
                {tech}
              </span>
            ))
          ) : (
            <span>{project.technologi}</span>
          )}
        </div>
      </div>
    </div>
  );
}
