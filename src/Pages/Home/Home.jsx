import React from 'react'
import style from './Home.module.css';
import Hero from '../../Components/Home_components/hero/hero';
import States from '../../Components/Home_components/States/States';
import About from '../../Components/Home_components/About/About';
import Skills from '../../Components/Home_components/Skills/Skills';
import Projects from '../../Components/Home_components/Project/Project';
import Contact from '../../Components/Home_components/Contact/Contact';
function Home() {
  return (
    <div className={style.Home}>
      <Hero/>
      <States/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
