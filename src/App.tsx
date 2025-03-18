import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<HeroSection />} />
        <Route path="/contact-us" element={<HeroSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
