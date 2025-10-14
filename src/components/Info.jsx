import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi"


export default function Information(){


  const sendMessage = () => {
    const phoneNumber = "573113559317"; // ← coloca tu número con código de país (57 = Colombia)
    const message = "¡Hola! Estoy interesado en tu portafolio."; 
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank"); // Abre en una nueva pestaña
  };


    return(<>
    
    <div id="info" className="flex flex-col ">
       
       <article>
        <h2 className="text-xl text-center">Informacion basica de contacto</h2>
        <div className="flex m-auto justify-center items-center gap-2">
            <h2>WhatsApp</h2>
            <div target="_blank" onClick={sendMessage}><BiLogoWhatsapp className="w-10 h-10"></BiLogoWhatsapp></div>
            <h2>Gmail</h2>
            <div target="_blank" ><BiLogoGmail className="w-10 h-10"></BiLogoGmail></div>
         </div>

       </article>

    </div>
    
    </>)
}