import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react"
import Navbar from './components/Navbar'
import HomePages from './pages/HomePages'
import Footer from './components/Footer'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
