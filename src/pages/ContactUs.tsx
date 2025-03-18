import { Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="mb-20 bg-gradient-to-r from-cyan-500 to-cyan-800 text-white">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-12 text-center max-w-3xl">
          Reach Out to Us
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:gap-8 md:gap-12 lg:gap-16 justify-center">
          <div className="group flex flex-col items-center space-y-4 sm:space-y-6 hover:bg-white/10 p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 w-full sm:w-auto">
            <Phone size={40} />
            <p className="text-cyan-100 text-base sm:text-lg">+233 256 852 953</p>
          </div>
          <div className="group flex flex-col items-center space-y-4 sm:space-y-6 hover:bg-white/10 p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 w-full sm:w-auto">
            <Mail size={40} />
            <p className="text-cyan-100 text-base sm:text-lg">medisync@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs