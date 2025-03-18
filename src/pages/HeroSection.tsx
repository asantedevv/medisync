const HeroSection = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('cheerful-ethnic-doctor-with-arms-crossed.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 w-2/3 p-4 bg-white/30 backdrop-blur-sm rounded-xl">
                <h1 className="font-extrabold text-6xl text-gray-600">We Provide <span className="text-cyan-700">Services</span><br />
                    That You Can <span className="text-cyan-700">Trust</span>
                </h1>
                <p className="text-sky-600 text-xl">Medisync is always at your service by providing quality and distinct outcomes</p>
                <div className="flex gap-4">
                    <button className="py-2 px-6 bg-cyan-700 text-white rounded-xl drop-shadow-lg">Sign Up</button>
                    <button className="py-2 px-6 bg-white text-cyan-700 rounded-xl drop-shadow-lg">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
