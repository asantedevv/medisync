import { useState } from "react"
import { Link } from "react-router-dom"
import { Squash as HamburgerSquash } from "hamburger-react"
import { motion } from "framer-motion"

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <header className="sticky top-0 z-50 bg-linear-to-r from-cyan-500 to-cyan-700 flex flex-row justify-between p-4 text-white items-center">
            <Link to="/" className="font-bold text-xl hover:scale-105 transition-transform duration-500">MediSync</Link>
            {/* Desktop Navigation */}
            <nav className="hidden text-white md:flex items-center space-x-8 text-cyan-700">
                <Link to="/" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Home</Link>
                <Link to="/services" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Services</Link>
                <Link to="/contact-us" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Contact Us</Link>
                <button className="text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg hover:-translate-y-1 transition-translate duration-500 cursor-pointer">Login</button>
                <button className="text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg hover:-translate-y-1 transition-translate duration-500 cursor-pointer">Sign Up</button>
            </nav>
            {/* Mobile Navigation */}
            <div className="md:hidden focus:outline-none">
                <HamburgerSquash
                    toggled={mobileMenuOpen}
                    toggle={toggleMobileMenu}
                    size={24}
                    duration={0.8}
                    easing="ease-in"
                    color="white"
                />
            </div>

            {mobileMenuOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden fixed top-20 left-0 w-full h-auto bg-cyan-700 flex flex-col items-center justify-center space-y-8 text-white py-8 rounded-b-3xl"
                >
                    <Link to="/" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Home</Link>
                    <Link to="/services" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Services</Link>
                    <Link to="/contact-us" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Contact Us</Link>
                    <button className="text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg hover:-translate-y-1 transition-translate duration-500 cursor-pointer">Login</button>
                    <button className="text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg hover:-translate-y-1 transition-translate duration-500 cursor-pointer">Sign Up</button>
                </motion.nav>
            )}
        </header>
    )
}

export default Navbar
