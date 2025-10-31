


export default function Presentation(){

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}hoja_de_vida_samuel_nanez.pdf`; 
  link.download = "Hoja_de_Vida_Samuel_Nanez_Rodriguez.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleCVDownload = () => {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}samuel_nanez_rodriguez_cv.pdf`; 
  link.download = "Samuel_Nanez_Rodriguez_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return(<>
    
    <div id="presentation" className=" flex w-full items-center justify-center  h-dvh p-5 ">
{/* text container presentation */}
        <div className="grow-1 p-5">

            <h1 className="sec-color  text-3xl md:text-5xl xl:text-7xl">Samuel Stiven Ñañez Rodriguez</h1>
            <h2 className="text-2xl mt-4 md:text-4xl xl:text-5xl">Desarrollador de software</h2>
            <h3 className="text-xl mt-2 md:text-3xl xl:3xl animate-pulse">Todo lo que imaginas al alcance de tu mano</h3>

        </div>
    {/* image container */}
    <div className="grow-1 p-5 ">
        
        <div className="rounded-full w-40 h-40 md:w-50 md:h-50 xl:w-80 xl:h-80 overflow-hidden  animate-shadow-pulse">
            <img src={`${import.meta.env.BASE_URL}/images/me.jpg`} alt="" className="w-full h-full object-cover"/>
        </div>
    </div>

    </div>
       
       {/* downlaoders flexs */}
       <div className="flex m-auto gap-2 w-[20dvw] md:w-[50dvw] xl:w-[60dvw]">
         <div className="flex  m-auto p-5 animate-shadow-pulse rounded-2xl mb-20 transform hover:scale-105 transition duration-500 ease-in-out ">
            <button onClick={handleDownload} className="w-full h-full ">Descargar Hoja de vida</button>
             
        </div>
           <div className="flex  m-auto p-5 animate-shadow-pulse rounded-2xl mb-20 transform hover:scale-105 transition duration-500 ease-in-out ">
           <button onClick={handleCVDownload} className="w-full h-full">Descargar CV</button>

            </div>
       </div>
        
    </>)
}