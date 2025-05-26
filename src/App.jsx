import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeCard from './component/Welcome'
import SignupScreen from './component/Signup'
import LoginScreen from './component/Login'
import ProfileScreen from './component/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />



        <BrowserRouter>
          <Routes>

            <Route path='/' element={<WelcomeCard />}></Route>
            <Route path='/signin' element={<LoginScreen />}></Route>
            <Route path='/signup' element={<SignupScreen />}></Route>
            <Route path='/account' element={<ProfileScreen />}></Route>

          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App

