import { useState } from "react";

export default function Header(){
 const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, isOpen]= useState("hidden");

  function OpenOptions(){
    if(open==="hidden")isOpen("flex")
      else isOpen("hidden");
  }
    return(
      <>
        <header className="flex w-full h-15 top-0 fixed justify-between items-center main-text shadow-md px-5 z-10">
          <h2 className="text-main text-2xl ml-5">Portafolio de Samuel</h2>

          <button onClick={OpenOptions} className="p-2 text-4xl md:hidden">=</button>
          {/* nav buttons */}

          {/* Pc nav bar */}
          <nav className=" hidden md:flex items-center gap-5">
            <button className="pb-1 border-b-2 border-b-transparent hover:border-b-current transition-colors duration-300" onClick={()=>handleScroll("experience")}>
              Experiencia
            </button>
             <button className="pb-1 border-b-2 border-b-transparent hover:border-b-current transition-colors duration-300" onClick={()=>handleScroll("aboutMe")}>
              Sobre mi
            </button>
             <button className="pb-1 border-b-2 border-b-transparent hover:border-b-current transition-colors duration-300" onClick={()=>handleScroll("proyects")}>
              Proyectos
            </button>
             <button className="pb-1 border-b-2 border-b-transparent hover:border-b-current transition-colors duration-300" onClick={()=>handleScroll("info")}>
              Contactos
            </button>
          </nav>

          {/* android uses */}

           
        </header>
         <nav className={` ${open} sm:hidden main-text flex-col fixed top-15 left-0 w-full h-full overflow-hidden z-[5] py-5 bg-color items-center gap-5`}>
            <button className=" border-1 px-10 py-2 rounded-xl transition-all hover:scale-125  ease  hover:border-2  duration-300" onClick={()=>handleScroll("experience")}>
              Contactos
            </button>
              <button className=" border-1 px-10 py-2 rounded-xl transition-all hover:scale-125  ease  hover:border-2  duration-300" onClick={()=>handleScroll("aboutMe")}>
              Sobre mi
            </button>
             <button className=" border-1 px-10 py-2 rounded-xl transition-all hover:scale-125  ease  hover:border-2  duration-300" onClick={()=>handleScroll("proyects")}>
              Proyectos
            </button>
             <button className=" border-1 px-10 py-2 rounded-xl transition-all hover:scale-125  ease  hover:border-2  duration-300" onClick={()=>handleScroll("info")}>
              Contactos
            </button>
          </nav>
      </>
    )
}