import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import  Footer from './Components/Footer/Footer';
import "./App.css";


function App() {
  return (
    <div>
          <Router>    
          <Navbar/>
                <Routes>
                  
                       <Route path='/' element={<Home/>}></Route>
                       <Route path='/about' element={<About/>}></Route>
                       <Route path='/Skills' element={<Skills/>}> </Route>
                       <Route path='/Contact' element={<Contact/>}></Route>
                       <Route path='/Portfolio' element={<Portfolio/>}></Route>
                </Routes>
                <Footer/>
          </Router>    
    </div>
  )
}

export default App
