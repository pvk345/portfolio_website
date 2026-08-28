import {React,useEffect} from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
