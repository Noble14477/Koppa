import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import { useEffect } from "react"
import { initFlowbite } from "flowbite"
import About from "./pages/About"
import Services from "./pages/Services"
import Works from "./pages/Works"


function App() {
  useEffect(()=>{
    initFlowbite();
  },[])


  return (
    <div className="w-full">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/works" element={<Works/>}/>
      </Routes>
    </div>

  )
}

export default App
