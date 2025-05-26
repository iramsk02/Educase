
  // Profile/Account Settings Screen
  import { User, Camera } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  

 export default function ProfileScreen (){ 
    const navigate=useNavigate();
    const fullName=localStorage.getItem("fullName");
    const email=localStorage.getItem("email");
   
      const [formData, setFormData] = useState({
    fullName: fullName,

    email: email,
   
  });
    return(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h2>
        
        <div className="flex items-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src="public\mary2.avif"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {formData.fullName || 'Marry Doe'}
            </h3>
            <p className="text-gray-600">
              {formData.email || 'Marry@Gmail.Com'}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-700 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button 
            onClick={() =>navigate('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )}

//   // Render current screen
//   const renderScreen = () => {
//     switch(currentScreen) {
//       case 'welcome':
//         return <WelcomeScreen />;
//       case 'login':
//         return <LoginScreen />;
//       case 'signup':
//         return <SignupScreen />;
//       case 'profile':
//         return <ProfileScreen />;
//       default:
//         return <WelcomeScreen />;
//     }
//   };

//   return (
//     <div className="font-sans">
//       {renderScreen()}
//     </div>
//   );
// };

