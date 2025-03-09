
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contacts from './Pages/Contacts'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}></Route>
        <Route path = "about" element = {<About/>}></Route>
        <Route path = "skills" element = {<Skills/>}></Route>
        <Route path = "contacts" element = {<Contacts/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
