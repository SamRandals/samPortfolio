


export default function AboutMe(){


   const handleDownload = () => {
    const link = document.createElement("a");
    const link2 = document.createElement("a");
    // first download
    link.href = "/docs/tituloTecnico.pdf"; 
    link.download = "TituloTecnico.pdf";
    // second downlaod
     link2.href = "/docs/certificadoFinal.pdf"; 
    link2.download = "certificadoFinal.pdf";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  };


return(<>

<section className="flex flex-col h-auto md:h-auto xl:h-auto">
    <h2 id="aboutMe" className="sec-color text-center text-4xl md:text-4xl xl:text-6xl mt-10 ">Sobre mi</h2>

    <h2 className="main-color text-center text-xl md:text-2xl xl:text-4xl">Informacion personal</h2>
    <article className="p-5 ">
        <h2 className="text-xl sec-color text-center">Quien Soy</h2>
        {/* container text */}
       <div className="w-fit sm:w-50 md:w-100 xl:w-240 m-auto">
         <p className="text-md p-2">Mi nombre es Samuel, soy desarrollador de software nacido en Cali, Colombia y un apasionado por la tecnología, tanto en el ámbito del hardware como del software. Me encanta usar la programación como herramienta para crear proyectos útiles y funcionales.
            Gracias a la programación, puedo desarrollar soluciones que se adapten a distintas necesidades, ya sean personales o para proyectos de mayor escala, como aplicaciones web o plataformas de comercio electrónico
        </p>
        <p className="text-md p-2">Desde joven me interesaron los computadores. Siempre sentí que eran más poderosos que los celulares, lo que despertó en mí una gran curiosidad por entender cómo funcionaban. En mi escuela IETIPAM, donde cursé el bachillerato, comencé un Técnico en Sistemas, en el cual aprendí sobre hardware, componentes de una computadora, lenguaje de programación Python y herramientas ofimáticas como Word y Excel, aplicadas al análisis de datos.</p>
        <p className="text-md p-2">Tiempo después me gradué como Técnico en Sistemas, y actualmente me encuentro cursando un Tecnólogo en Análisis y Desarrollo de Software, con el objetivo de seguir mejorando mis habilidades y aportar soluciones tecnológicas innovadoras.</p>
        <p className="text-md mt-4 p-2">
            Mi objetivo es seguir creciendo como desarrollador, crear proyectos que impacten positivamente y combinar creatividad con tecnología para resolver problemas reales.
            </p>
            
            <h2 className="text-xl sec-color text-center">Info basica</h2>
            <div className="flex flex-col pl-10">
                <details>
                    <summary className="sec-color">Donde vivo?</summary>
                    Actualmente vivo en la ciudad de Cali, Colombia
                </details>
                <details>
                    <summary className="sec-color">Cuantos años tengo?</summary>
                    Tengo 19 años de edad
                </details>
                 <details>
                    <summary className="sec-color">En que me especializo?</summary>
                    En el FrontEnd con enfoque React y TailwindCss
                </details>
                 <details>
                    <summary className="sec-color">Formación</summary>
                    Tecnico en Sistemas, actualmente cursando un Tecnologo en Analisis y Desarrollo de Software
                </details>
                <details>
                    <summary className="sec-color">Idiomas</summary>
                    Actualmente manejo ingles basico como para traducir textos o interpretar ciertas frases
                </details>
            </div>
        <div className="flex">
            {/* title for titulos graduado */}
            <h2 className="sec-color text-xl:">Titulos</h2>
            <div className="grid grid-cols-1 grid-rows-[300px] mt-10 m-auto">
                <div className="p-5 w-full h-full  overflow-hidden transform hover:scale-105 transition duration-500 ease shadow-md rounded-xl ">
                    <img src="/docs/titleView.png" alt="titulo vista" className="w-full h-full object-contain" onClick={handleDownload}/>
                </div>
                
                
            </div>

        </div>
       </div>

    </article>
    
    <h2 className="main-color text-center text-xl md:text-2xl xl:text-4xl">Competencias</h2>
    {/* grid template  */}
    <div className="grid grid-rows-2 md:grid-cols-2 xl:grid-cols-2 gap-5 box-shadow mt-10 p-5">
        {/* subitem 1 */}
        <div className="w-full h-full flex flex-col p-5 shadow-color rounded-md">
            <h3 className="text-center">Trabajo en equipo</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
            
            {/* subitem 2 */}
             <h3 className="text-center">Trabajo en equipo</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
            {/* subitem 3 */}
              <h3 className="text-center">Trabajo en equipo</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
           
        </div>
        {/* item 2 */}

               {/* subitem 1 */}
        <div className="w-full h-full flex flex-col p-5 shadow-color rounded-md">
            <h3 className="text-center">Caracteristicas</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
            
            {/* subitem 2 */}
             <h3 className="text-center">Trabajo en equipo</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
            {/* subitem 3 */}
              <h3 className="text-center">Trabajo en equipo</h3>
            <div className=" flex w-auto sm:w-auto xl:w-full  h-10 rounded-xl overflow-hidden border-color text-center items-center ">
                <div className="bar w-[90%] h-full bg-color text-center flex flex-col justify-center items-center" ><p>Eficiente en equipo: 80%</p></div>
            </div>
           
        </div>
    </div>
</section>

</>)

}