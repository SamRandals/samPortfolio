import { BiCopyright, BiLogoGmail, BiLogoGithub } from "react-icons/bi"

export default function Footer(){

    return(<>
        
<footer className="flex flex-col w-full p-10 ">
<h2 className="text-center main-color text-xl">Portafolio de Samuel Ñañez</h2>
<h3 className="text-center main-color">Desarrollador de Software</h3>
<div className="flex text-center items-center m-auto">
        <p>Todos los derechos reervados 2026</p>
        <BiCopyright className="ml-1"></BiCopyright>

</div>
<div className="flex items-center gap-5 text-2xl">
        <h2 className="sec-color">Conoce mas:</h2>
     <a href="https://i.pinimg.com/1200x/d2/f7/3d/d2f73df05b45bb698aa53151c89f2116.jpg" >   <BiLogoGmail></BiLogoGmail></a>
        <a href="https://github.com/SamRandals?tab=repositories" target="blank  "><BiLogoGithub></BiLogoGithub></a>
</div>
<h2 className="text-center sec-color">Este portafolio fue desarrollado con React+vite y TailwindCss</h2>
</footer>
    </>)


}