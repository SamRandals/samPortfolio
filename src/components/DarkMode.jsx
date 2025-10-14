

import { useState, useEffect } from "react"





export default function DarkMode(){

    const [dark, setDarkMode]= useState(false);

    useEffect(()=>{
        const saveTheme = localStorage.getItem("theme");

        if(saveTheme ==="dark"){
            document.documentElement.classList.add("dark")
            setDarkMode(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    })

    function changeTheme(){
        if(dark){
            document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "ligth");
            setDarkMode(false);
        }
        else{
            setDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
    }

    return(<>
    
    <div className="flex fixed bottom-10 right-10">

        <button className="rounded-md main-text border-none bg-slate-600 py-2 px-1" onClick={changeTheme}>
            Change Theme
        </button>
    </div>
    
    </>)
}