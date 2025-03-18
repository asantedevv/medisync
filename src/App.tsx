import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<HeroSection />} />
        <Route path="/contact-us" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
