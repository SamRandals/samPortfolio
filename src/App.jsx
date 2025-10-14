import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Presentation from './components/Presentation'
import DarkMode from './components/DarkMode'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Proyects from './components/Proyects'
import AnimatedOnView from './Animations/AnimationsWrapper'
import Info from  './components/Info'

// footer
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <Header></Header>

    <div className="relative content mt-20 main-text transition-colors duration-1000 ease">
     <AnimatedOnView> <Presentation></Presentation>      </AnimatedOnView>
      
      <AnimatedOnView><Experience></Experience></AnimatedOnView>
      <AnimatedOnView><AboutMe></AboutMe></AnimatedOnView>
      <Proyects></Proyects>
      <Info></Info>
      <AnimatedOnView><Footer></Footer></AnimatedOnView>


    </div>

    <DarkMode></DarkMode>
    </>
  )
}

export default App
