import React from 'react'
import { getAuth, createUserWithEmailAndPassword ,signInWithPopup } from "firebase/auth";
import { app,provider } from '../firebase/firebase';
import { useState } from 'react';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';


const SignUpForm = ({showPassword,setShowPassword,setIsLoggedIn}) => {

  const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const auth = getAuth(app);
    function signUpHandler(event){
      event.preventDefault();
      
      
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLoggedIn(true);
          toast.success("LoggedIn Successfully")
          navigate("/dashboard");
          
        })
        .catch((error) => {
          toast.error("Invalid Credentials")
          console.log(error);
        });
    }
    const googleSignIn = (e) => {
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          setIsLoggedIn(true);
          const user = userCredential.user;
          console.log(user);
          toast.success("LoggedIn!!");
          navigate('/dashboard');

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorCode, errorMessage);
          // ..
        });
      e.preventDefault();
    };
  return (
    <div className='h-[600px] w-[400px]'>
        <form onSubmit={signUpHandler}  className="h-full w-full  flex justify-center items-center flex-col gap-y-3">
           <div>
           <input onChange={(e)=>setEmail(e.target.value)} className=" bg-transparent  focus:shadow-2xl rounded-md  p-3 m-3 border  shadow-blue-400 " placeholder='Email' type='email' required></input>
           </div>
           <div className='password'>
           <div className="flex flex-row">
           <input onChange={(e)=>setPassword(e.target.value)}
           className=" bg-transparent  focus:shadow-2xl rounded-md  p-3 m-3 border  shadow-blue-400 "
             placeholder='Password' type={  showPassword ? 'text': 'password'} required minLength={5}></input>
          
           </div>
            <div onClick={()=>setShowPassword(!showPassword)} className="flex justify-end items-center -mt-11 text-2xl  cursor-pointer  mr-4 ml-4 text-orange-950">
           {
             showPassword? <FaEye/> : <FaEyeSlash/>
           }
           </div>
           </div>
           <button  className="m-1 p-3 flex flex-row justify-center items-center   bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400" type='submit' 
                onClick={signUpHandler}>
                  SignUp
           </button>
           <div className=' text-blue-200'>OR</div>
            <div className='flex flex-row'>
            <hr></hr>
            <Icon icon="devicon:google" onClick={googleSignIn} className=' cursor-pointer' />
            <hr></hr>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm