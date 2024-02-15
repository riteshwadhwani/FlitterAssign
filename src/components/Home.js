import React, { useState } from 'react'
import { LoginForm } from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';


const Home = ({formType ,setFormType,setIsLoggedIn}) => {
    const [showPassword,setShowPassword] = useState(false);
  return (
    <div className=' flex flex-col h-[625px] w-screen'>
    <div className="flex flex-col justify-center items-center h-[625px]"> 
       
      <div className="h-[400px] w-[400px] bg-blue-300 bg-opacity-15 hover:shadow-2xl hover:shadow-blue-400    rounded-xl  backdrop-blur-3xl   border border-blue-200 flex justify-center items-center flex-col gap-y-3">
      {
        formType==="login" ? <LoginForm 
        showPassword={showPassword} 
        setShowPassword={setShowPassword}
        setIsLoggedIn={setIsLoggedIn}
        FormType="login"
         /> :  
      <SignUpForm showPassword={showPassword}
       setShowPassword={setShowPassword}
       setIsLoggedIn={setIsLoggedIn}
       FormType="login"
       />
      }
      </div>
     
    </div>
    </div>
  )
}

export default Home