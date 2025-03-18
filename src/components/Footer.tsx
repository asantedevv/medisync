import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-cyan-600 to-cyan-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* MediSync Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">MediSync</h3>
                    <p className="text-sm sm:text-base text-cyan-100">
                        Making a difference in people's lives through online medical services.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="text-sm sm:text-base text-cyan-100 hover:text-white hover:underline transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-sm sm:text-base text-cyan-100 hover:text-white hover:underline transition-colors duration-300">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="text-sm sm:text-base text-cyan-100 hover:text-white hover:underline transition-colors duration-300">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Legal</h3>
                    <div className="space-y-2">
                        <p className="text-sm sm:text-base text-cyan-100">Privacy Policy</p>
                        <p className="text-sm sm:text-base text-cyan-100">Terms of Service</p>
                        <p className="text-sm sm:text-base text-cyan-100">Transparency Report</p>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Newsletter</h3>
                    <p className="text-sm sm:text-base text-cyan-100">Stay updated with our latest innovative ideas</p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 text-sm sm:text-base rounded-full text-cyan-900 bg-white border-2 border-transparent focus:outline-none focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200 transition-all duration-300"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm sm:text-base rounded-full bg-white text-cyan-800 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="my-8 sm:my-12 border-t border-cyan-400/30"></div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
                <p className="text-sm sm:text-base text-cyan-100">
                    © {new Date().getFullYear()} MediSync. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;