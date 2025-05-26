import { useState} from "react";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
export default function LoginScreen() {
    const navigate = useNavigate()

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const Login = () => {

        if (email === loginData.email && password === loginData.password) {
            toast.success("successfully logged in")
            navigate("/account")
        }
        else {
            toast.error("invalid credentials")
        
        }
    }
    return (
        <>           <ToastContainer/>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Signin to your PopX account</h2>
                    <p className="text-gray-600 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-purple-600 font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-purple-600 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                    </div>

                    <button
                        onClick={Login}
                        className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                    >
                        Login
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
        </>

    )
}
