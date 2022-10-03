import Navbar from "./Navbar"

import Home from "./pages/Home"
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact"
import Getorder from "./pages/Getorder"
function App() {
  return (
    <>
    
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/getorder" element={<Getorder/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
