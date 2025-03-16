"use client"
import './App.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Sections/Home'
import Navbar from './Components/Navbar'
import About from './Components/Sections/About'
import Works from './Components/Sections/Works'
import Contacts from './Components/Sections/Contacts'
import {motion, useScroll, useTransform } from 'framer-motion'


function App() {
  const {scrollYProgress} = useScroll();
  console.log(scrollYProgress)

  const backgroundColor = useTransform(
    scrollYProgress,
  [0, 0.5, 1],
  ["#f00", "#1dff42", "#4ef0ff"]
  )
  return (
    <>
    <Navbar />
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX : scrollYProgress,
        position : "fixed",
        top:20,
        left:0,
        right:0,
        height:"50px",
        originX:0,
        backgroundColor
      }}
    
    />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="works"><Works /></div>
      <div id="contacts"><Contacts/></div>
    </>
  )
}

export default App
