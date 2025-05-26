import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeCard = () => {
    const navigate=useNavigate();
    
    return(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PopX</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/signup')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            Create Account
          </button>
          
          <button 
            onClick={() => navigate('signin')}
            className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )};
export default WelcomeCard;
