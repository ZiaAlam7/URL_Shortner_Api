import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero_Top from './components/Hero_Top/Hero_Top'
import Hero_Main from './components/Hero_Main/Hero_Main'
import Hero_Bottom from './components/Hero_Bottom/Hero_Bottom'
import Pre_Footer from './components/Pre_Footer/Pre_Footer'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>   
    <Navbar/>
    <Hero_Top/>
    <Hero_Main/>
    <Hero_Bottom/>
    <Pre_Footer/>
    <Footer/>

    <div className="attribution">
    <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a></p> 
    <p>Coded by <a href="https://www.linkedin.com/in/zia-alam-102572227/">Zia Alam</a></p>
  </div>
    </>

  )
}

export default App