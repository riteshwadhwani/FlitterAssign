import React from 'react'
import { getAuth,signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { app,provider } from '../firebase/firebase';
import { useState } from 'react';
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';

export const LoginForm = ({showPassword,setShowPassword ,setIsLoggedIn}) => {

             const navigate = useNavigate();
             const [formData, setFormData] = useState( {
               email:"", password:""
           })
           function changeHandler(event){
             setFormData((prevData) =>(
              {
               ...prevData,
               [event.target.name] :event.target.value
              }
             ))
           }
           const auth = getAuth(app);
         
         function submitHandler(event){
           event.preventDefault();
                 const {email,password} = formData;
                 signInWithEmailAndPassword(auth, email, password)
                 .then((userCredential) => {
                  setIsLoggedIn(true);
                   toast.success("LoggedIn Successfully");
                   navigate("/dashboard");
                  })
                  
                  .catch((error) => {
                   toast.error("Invalid Credentials");
                   console.log(error)
                    });

}
const googleSignIn = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      setIsLoggedIn(true);
      toast.success("LoggedIn!!");
      navigate('/dashboard');

    })
    .catch((error) => {
      toast.error(error.message)
      const errorCode = error.code;
      const errorMessage = error.message;
  
      console.log(errorCode, errorMessage);
      // ..
    });

};
  return (
    <div className='h-[400px] w-[400px] '>
  
      <form onSubmit={submitHandler} className="h-full w-full   flex justify-center items-center flex-col gap-y-3">

           <input onChange={changeHandler} value={formData.email} name='email' className=" bg-transparent  focus:shadow-md rounded-md  p-3 m-3 border shadow-blue-400 " placeholder='Email' type='email' required></input>
          
           
            <div className='password'>
            <div className="flex flex-row">
            <input onChange={changeHandler} value={formData.password} name='password'
             className=" bg-transparent  focus:shadow-2xl rounded-md  p-3 m-3 border  shadow-blue-400 " placeholder='Password' type={  showPassword ? 'text': 'password'} required minLength={5}></input>
           
            </div>
            <div onClick={()=>setShowPassword(!showPassword)} className="flex justify-end items-center -mt-11 text-2xl cursor-pointer  mr-4 ml-4 text-orang-950">
            {
              showPassword? <FaEye/> : <FaEyeSlash/>
            }
            </div>
            </div>
            <button className="m-1 p-3 flex flex-row justify-center items-center   bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400"type='submit' >
                  Login
                </button>
            <div className=' text-blue-200'>OR</div>
            <div className='flex flex-row'>
            <hr></hr>
            <Icon icon="devicon:google" onClick={googleSignIn} className=' cursor-pointer'/>
            <hr></hr>
            </div>
           
                
      </form>
    </div>
  )
}
