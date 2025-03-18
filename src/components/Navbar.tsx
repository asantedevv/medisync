const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-linear-to-r from-cyan-500 to-cyan-700 flex flex-row justify-between p-4 text-white items-center">
            <h1 className="font-bold text-xl">MediSync</h1>
            <div className="flex gap-4 text-cyan-700">
                <ul className="flex gap-8 text-white">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
                <button className="py-2 px-6 bg-white rounded-xl">Login</button>
                <button className="py-2 px-6 bg-white rounded-xl">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
