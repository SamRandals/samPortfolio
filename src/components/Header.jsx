

export default function Header(){
 const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(<>
      <header className='flex items-center justify-between w-full  shadow-color h-15 fixed top-0 z-50 backdrop-blur-2xl'>
      <p className=' logo text-3xl p-2 ml-4 main-text animate-pulse '>Portfolio Samuel</p>

      <ul className='flex mr-20 gap-10 main-text h-full'>
        <li className='h-full'>
          <button className='h-full hover:border-b hover:text-xl transition-all duration-300 ease-in ' onClick={()=>handleScroll("presentation")}>Home</button>
        </li>
        <li>
          <button className='h-full hover:border-b hover:text-xl transition-all duration-300 ease-in  ' onClick={()=>handleScroll("experience")}>Experience</button>
        </li>
        <li>
          <button className='h-full hover:border-b hover:text-xl transition-all duration-300 ease-in  ' onClick={()=>handleScroll("aboutMe")}>About me</button>
        </li>
        <li>
          <button className='h-full hover:border-b hover:text-xl transition-all duration-300 ease-in  ' onClick={()=>handleScroll("proyects")}>Proyects</button>
        </li>
        <li>
          <button className='h-full hover:border-b hover:text-xl transition-all duration-300 ease-in  ' onClick={()=>handleScroll("info")}>Contacts</button>
        </li> 
      </ul>

    </header>
    </>)
}