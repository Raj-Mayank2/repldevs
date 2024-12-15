import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Teams from "./pages/Teams/Teams";
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App