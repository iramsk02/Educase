
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

  const createAccount = () => {
    try {
      localStorage.setItem("fullName", formData.fullName);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);
      toast("account created successfully")
      navigate("/signin")
    } catch (err) {
      toast("error creating account")
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
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
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 font-medium mb-2">Company name</label>
            <input
              type="text"
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                  className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === false}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                  className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            onClick={createAccount}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors mt-8"
          >
            Create Account
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
  )
}