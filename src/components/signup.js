// src/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Google Calendar - Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-group">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
