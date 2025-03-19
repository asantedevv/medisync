import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Squash as HamburgerSquash } from "hamburger-react"
import { motion } from "framer-motion"

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    interface ScrollToSectionProps {
        id: string;
    }

    const scrollToSection = ({ id }: ScrollToSectionProps) => {
        if (location.pathname !== "/") {
            // Redirect to homepage and pass the section id as state
            navigate("/", { state: { scrollTo: id } });
            toggleMobileMenu();
        } else {
            // If already on homepage, just scroll
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                toggleMobileMenu();
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-linear-to-r from-cyan-500 to-cyan-700 flex flex-row justify-between p-4 text-white items-center mx-auto w-full">
            <Link to="/" className="font-bold text-2xl sm:text-3xl">MediSync</Link>
            {/* Desktop Navigation */}
            <nav className="hidden text-white md:flex items-center space-x-8 text-cyan-700 text-sm sm:text-base">
                <button onClick={() => scrollToSection({ id: "hero" })} className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Home</button>
                <button onClick={() => scrollToSection({ id: "services" })} className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Services</button>
                <button onClick={() => scrollToSection({ id: "contact" })} className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">Contact Us</button>
                <Link to="/login" className="rounded-xl py-2 px-6 hover:bg-white/30 transition-colors duration-500 cursor-pointer">
                    <button className="text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg hover:-translate-y-1 transition-translate duration-500 cursor-pointer">Login</button>
                </Link>
            </nav>
            {/* Mobile Navigation */}
            <div className="md:hidden focus:outline-none">
                <HamburgerSquash
                    toggled={mobileMenuOpen}
                    toggle={toggleMobileMenu}
                    size={24}
                    duration={0.5}
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
                    className="md:hidden fixed top-20 left-0 w-full h-auto bg-cyan-700 flex flex-col items-center justify-center space-y-4 text-white py-8 px-4 rounded-b-3xl"
                >
                    <button onClick={() => scrollToSection({ id: "hero" })} className="w-full py-2 px-6">Home</button>
                    <button onClick={() => scrollToSection({ id: "services" })} className="w-full py-2 px-6">Services</button>
                    <button onClick={() => scrollToSection({ id: "contact" })} className="w-full py-2 px-6">Contact Us</button>
                    <Link to="/login" className="w-full">
                        <button
                            className="w-full text-cyan-700 py-2 px-6 bg-white rounded-xl drop-shadow-lg"
                            onClick={() => toggleMobileMenu()}
                        >
                            Login
                        </button>
                    </Link>
                </motion.nav>
            )}
        </header>
    )
}

export default Navbar
