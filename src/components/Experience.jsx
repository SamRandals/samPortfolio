

export default function Experience(){
    return (
        <>
        {/* experience apartado */}
            <h1  id="experience" className="text-2xl md:text-4xl xl:text-6xl text-center mb-10 sec-color">Experience</h1>
            <div  className=" flex  flex-col   h-auto w-full">
                <h2 className="text-center text-xl md:text-2xl xl:text-4xl">Sin experiencia laboral</h2>
                <div className="w-100 md:w-240 text-pretty m-auto">
               <p className="sec-color text-center mt-5 p-2"> Enfocado en el desarrollo frontend</p>
                <p className="w-fit sm:120 md:w-150 xl:w-220 text-center m-auto ">
                Soy un estudiante y desarrollador frontend apasionado por crear interfaces modernas, dinámicas y funcionales. Aunque aún no tengo experiencia laboral formal, he desarrollado diversos proyectos personales utilizando React y TailwindCSS, lo que me ha permitido fortalecer mis habilidades en el diseño, la estructura y la interactividad de las aplicaciones web.
                </p>
                <p className="w-fit sm:120 md:w-150 xl:w-220 text-center m-auto ">Mi principal enfoque está en ofrecer experiencias de usuario fluidas y atractivas, aplicando buenas prácticas de código y diseño responsivo.</p>
                <p className="w-fit sm:120 md:w-150 xl:w-220 text-center m-auto " >Además, cuento con conocimientos básicos en backend con PHP y SQL, lo que me permite comprender cómo se conectan las interfaces con la lógica del servidor y las bases de datos.</p>
               
                </div>

                {/* tecnologia apartado */}
                <h1 className="text-center md:text-2xl xl:text-4xl my-2 sec-color mt-15">Tecnologicas</h1>
                {/* grid tecnology items */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">

                    {/* Item 1 */}
                    <div className="item w-full h-full p-5 shadow-color flex flex-col rounded-xl  transform transition-transform duration-500 
            hover:scale-105 hover:rotate-x-12">
                        <h1 className="text-center">Front end:</h1>
                        {/* Image sub item */}
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>Html:  <b className="good-color">Avanzado</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://angelvicen.com/wp-content/uploads/2020/04/html5.png" alt="By angelvicen" className="w-full h-full object-cover" /> </div>
                        </div>
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>Css: <b className="good-color">Avanzado</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://www.solucionex.com/sites/default/files/styles/wide/public/posts/imagen/logo-2582747_640.png.webp?itok=V1ePO3dr" alt="by solucionex" className="w-full h-full object-cover" /> </div>
                        </div>
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>JavaScript: <b className="good-color">Intermedio-avanzado</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://www.academyclass.com/wp-content/uploads/2021/10/Javascript-1200x1200.png" alt="by academyclass" className="w-full h-full object-cover" /> </div>
                        </div>
                    </div>
                      {/* Item 2 */}
                    <div className="item w-full h-full p-5 shadow-color flex flex-col rounded-xl  transform transition-transform duration-500 
            hover:scale-105 hover:rotate-x-12">
                        <h1 className="text-center">FrameWorks:</h1>
                        {/* Image sub item */}
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>React:  <b className="good-color">Intermedio</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/langes-1100px-React.svg.png" alt="By angelvicen" className="w-full h-full object-contain" /> </div>
                        </div>
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>Tailwindcss:  <b className="good-color">Intermedio</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="by solucionex" className="w-full h-full object-contain" /> </div>
                        </div>
                    </div>
                      {/* Item 2 */}
                    <div className="item w-full h-full p-5 shadow-color flex flex-col rounded-xl  transform transition-transform duration-500 
            hover:scale-105 hover:rotate-x-12">
                        <h1 className="text-center">Backend:</h1>
                        {/* Image sub item */}
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>Php: <b className="bad-color">basico</b></p>   <div className="w-10 h-10 overflow-hidden">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="By wikimedia" className="w-full h-full object-contain" /> </div>
                        </div>
                        <div className="tecnologies w-full p-5 flex items-center justify-between ">
                          <p>Node js + Express:</p>   <div className="w-20 h-10 overflow-hidden">  <img src="https://qualitapps.com/wp-content/uploads/2023/02/102.png" alt="by solucionex" className="w-full h-full object-cover" /> </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}