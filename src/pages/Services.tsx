import { UserRoundCheck, CalendarSync, MessageCircleMore, Library, LayoutDashboard, CreditCard } from 'lucide-react';

const services = [
  { icon: <UserRoundCheck size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Role-Based Access' },
  { icon: <MessageCircleMore size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Real-Time Messaging & Notifications' },
  { icon: <CalendarSync size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Automated Appointment Scheduling' },
  { icon: <Library size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Electronic Health Records(EHR) Management' },
  { icon: <CreditCard size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Billing & Payment Processing' },
  { icon: <LayoutDashboard size={50} className="text-gray-600 group-hover:text-white transition-colors duration-300" />, description: 'Manager Dashboard' },
];

const Services = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 text-center max-w-3xl">
        We Are Always Ready to Help You Manage Your Hospital
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center px-4 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-cyan-400 to-cyan-700 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-cyan-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              {service.icon}
              <p className="mt-3 text-lg sm:text-xl text-center text-white font-bold group-hover:scale-105 transition-transform duration-300">
                {service.description}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;