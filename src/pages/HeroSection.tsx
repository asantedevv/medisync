const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center scale-x-[-1] min-h-screen bg-cover bg-center p-4 md:p-8"
            style={{ backgroundImage: "url('cheerful-ethnic-doctor-with-arms-crossed.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative scale-x-[-1] z-10 w-full md:w-5/6 lg:w-2/3 py-6 px-6 sm:py-8 sm:px-10 md:px-16 lg:px-20 bg-white/30 backdrop-blur-sm rounded-xl">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600">
                    We Provide <span className="text-cyan-700">Services{" "}</span><br className="hidden sm:block" />
                    That You Can <span className="text-cyan-700">Trust</span>
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-3 md:mt-4">
                    Medisync is always at your service by providing quality and distinct outcomes
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-6">
                    <button className="py-2 px-4 md:px-6 bg-cyan-700 text-white text-sm md:text-base rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer w-full sm:w-auto">
                        Sign Up
                    </button>
                    <button className="py-2 px-4 md:px-6 bg-white text-cyan-700 text-sm md:text-base rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer w-full sm:w-auto">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;