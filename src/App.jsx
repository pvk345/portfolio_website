import {React,useEffect} from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (
    <main className='bg-gray-950'>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}

export default App
