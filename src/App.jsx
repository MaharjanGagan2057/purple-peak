
import './App.css'
import { BrouserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Contact from './pages/Contact'
import Booking from './pages/Booking'


function App() {
  

  return (
    <>
    
      <BrouserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          </Routes>
        </BrouserRouter>
        
    </>
  )
}

export default App
