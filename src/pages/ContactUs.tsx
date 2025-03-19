import { Mail, Phone, Calendar, CircleUser } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="text-white">
      <div className='bg-gradient-to-r from-cyan-500 to-cyan-800'>
        <div className="mb-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:gap-8 md:gap-12 lg:gap-16 justify-center">
            <div className='group flex justify-center items-center gap-4 p-4 rounded-xl hover:bg-white/10'>
              <div>
                <CircleUser size={40} />
              </div>
              <div>
                <p className="text-cyan-100 text-base sm:text-2xl font-bold">4567</p>
                <p className="text-cyan-100 text-base sm:text-lg">Happy Users</p>
              </div>
            </div>
            <div className='group flex justify-center items-center gap-4 p-4 rounded-xl hover:bg-white/10'>
              <div>
                <Calendar size={40} />
              </div>
              <div>
                <p className="text-cyan-100 text-base sm:text-2xl font-bold">1</p>
                <p className="text-cyan-100 text-base sm:text-lg">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-cyan-500 to-cyan-800'>
        <div className="mb-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 text-center max-w-3xl">
            Reach Out to Us
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:gap-8 md:gap-12 lg:gap-16 justify-center">
            <div className="group flex flex-col items-center space-y-4 sm:space-y-6 hover:bg-white/10 p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 w-full sm:w-auto">
              <div className="p-3 bg-white/10 rounded-full">
                <Phone size={40} />
              </div>
              <p className="text-cyan-100 text-base sm:text-lg">+233 256 852 953</p>
            </div>
            <div className="group flex flex-col items-center space-y-4 sm:space-y-6 hover:bg-white/10 p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 w-full sm:w-auto">
              <div className="p-3 bg-white/10 rounded-full">
                <Mail size={40} />
              </div>
              <p className="text-cyan-100 text-base sm:text-lg">medisync@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs