import { useState } from 'react';
import { User, Lock, ChevronDown } from 'lucide-react';

const Login = () => {
   const [userType, setUserType] = useState('');

   const userTypes = [
      { value: 'patient', label: 'Patient' },
      { value: 'doctor', label: 'Doctor' },
      { value: 'admin', label: 'Administrators & Managers' }
   ];

   return (
      <div
         className="flex flex-col lg:flex-row lg:min-h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('stethoscope.jpg')" }}
      >
         <div className="w-full lg:w-1/2 flex justify-center items-center p-4 py-8">
            <form className="p-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl w-full max-w-md flex flex-col">
               <h1 className="text-2xl font-semibold text-center text-cyan-600 mb-6">Login</h1>
               <div className="mb-4 relative">
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                     User Type
                  </label>
                  <div className="relative">
                     <select
                        id="userType"
                        name="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                     >
                        <option value="" disabled>Select user type</option>
                        {userTypes.map((type) => (
                           <option key={type.value} value={type.value}>
                              {type.label}
                           </option>
                        ))}
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                     </div>
                  </div>
               </div>

               {/* Email Input */}
               <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                     Email
                  </label>
                  <div className="relative">
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                        placeholder="your@email.com"
                     />
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} className="text-gray-400" />
                     </div>
                  </div>
               </div>

               {/* Password Input */}
               <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                     Password
                  </label>
                  <div className="relative">
                     <input
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                        placeholder="••••••••"
                     />
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-gray-400" />
                     </div>
                  </div>
               </div>

               {/* Login Button */}
               <button
                  type="submit"
                  className="w-full py-2 px-4 bg-cyan-700 text-white text-sm font-medium rounded-md shadow-sm hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
               >
                  Login
               </button>

               <p className="mt-4 text-center text-sm text-gray-600">
                  New User?
                  <a href="/sign-up" className="ml-1 font-medium text-cyan-600 hover:text-cyan-500">
                     Sign Up
                  </a>
               </p>

               {/* Divider */}
               <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                     <span className="rounded-lg p-2 bg-white text-gray-500">Or continue with</span>
                  </div>
               </div>

               {/* Google Sign In */}
               <button
                  type="button"
                  className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
               >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                     <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                     </g>
                  </svg>
                  Sign in with Google
               </button>
            </form>
         </div>

         <div className="hidden lg:block lg:w-1/2">
            <img
               src="doctors.jpg"
               alt="Healthcare professionals"
               className="object-cover w-full h-full rounded-l-[100px]"
            />
         </div>
      </div>
   );
};

export default Login;