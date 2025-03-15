
import './App.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Sections/Home'
import Navbar from './Components/Navbar'
import About from './Components/Sections/About'
import Works from './Components/Sections/Works'
import Contacts from './Components/Sections/Contacts'


function App() {

  return (
    <>
    <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="works"><Works /></div>
      <div id="contacts"><Contacts/></div>
    </>
  )
}

export default App
