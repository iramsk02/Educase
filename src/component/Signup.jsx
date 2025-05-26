
// // Signup Screen
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// export default function SignupScreen() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     password: '',
//     company: '',
//     isAgency: false
//   });

//   const createAccount = () => {
//     try {

//       localStorage.setItem("fullName", formData.fullName);
//       localStorage.setItem("email", formData.email);
//       localStorage.setItem("password", formData.password);

//       toast("account created successfully")
//       navigate("/signin")
//     } catch (err) {
//       toast("error creating account")
//     }
//   }


//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Create your PopX account</h2>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <label className="block text-purple-600 font-medium mb-2">
//               Full Name<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Mary Doe"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-purple-600 font-medium mb-2">
//               Phone number<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               placeholder="Phone number"
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-purple-600 font-medium mb-2">
//               Email address<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-purple-600 font-medium mb-2">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-purple-600 font-medium mb-2">Company name</label>
//             <input
//               type="text"
//               placeholder="Company name"
//               value={formData.company}
//               onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-4">
//               Are you an Agency?<span className="text-red-500">*</span>
//             </label>
//             <div className="flex space-x-6">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="agency"
//                   checked={formData.isAgency === true}
//                   onChange={() => setFormData({ ...formData, isAgency: true })}
//                   className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
//                 />
//                 <span className="ml-3 text-gray-700">Yes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="agency"
//                   checked={formData.isAgency === false}
//                   onChange={() => setFormData({ ...formData, isAgency: false })}
//                   className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
//                 />
//                 <span className="ml-3 text-gray-700">No</span>
//               </label>
//             </div>
//           </div>

//           <button
//             onClick={createAccount}
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors mt-8"
//           >
//             Create Account
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <button
//             onClick={() => navigate('/')}
//             className="text-purple-600 hover:text-purple-800 font-medium"
//           >
//             Back to Welcome
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// Signup Screen
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Check if agency selection is made (required field)
    if (formData.isAgency === null || formData.isAgency === undefined) {
      newErrors.isAgency = 'Please select whether you are an agency';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createAccount = async () => {
    // Prevent multiple submissions
    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if email already exists (basic check)
      const existingEmail = localStorage.getItem("email");
      if (existingEmail === formData.email) {
        toast.error("An account with this email already exists");
        setIsSubmitting(false);
        return;
      }

      // Save to localStorage
      localStorage.setItem("fullName", formData.fullName);
      localStorage.setItem("phone", formData.phone);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);
      localStorage.setItem("company", formData.company);
      localStorage.setItem("isAgency", formData.isAgency.toString());

      toast.success("Account created successfully!");
      
      // Small delay for better UX
      setTimeout(() => {
        navigate("/signin");
      }, 1000);

    } catch (err) {
      console.error("Error creating account:", err);
      toast.error("Error creating account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear error when user starts typing
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-2xl  shadow-sm border border-gray-200 p-8 w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Create your PopX account</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Mary Doe"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">Company name</label>
            <input
              type="text"
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-4">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === true}
                  onChange={() => handleInputChange('isAgency', true)}
                  className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === false}
                  onChange={() => handleInputChange('isAgency', false)}
                  className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">No</span>
              </label>
            </div>
            {errors.isAgency && <p className="text-red-500 text-sm mt-1">{errors.isAgency}</p>}
          </div>

          <button
            onClick={createAccount}
            disabled={isSubmitting}
            className={`w-full font-semibold py-4 px-6 rounded-xl transition-colors mt-8 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
}