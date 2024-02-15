
import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";

import { useNavigate } from 'react-router-dom';

const Navbar = ({isLoggedIn,setFormType,clicked,setClicked,performance,setPerformance}) => {
    const navigate = useNavigate();
    function backHandler(){
      setPerformance(false);
      navigate('/dashboard');
    }
  return (
    <div className="flex flex-col boder border-blue-400 rounded-md bg-transparent ">
        <div className='w-full h-[100px]  flex flex-row justify-between'>
             <div className=' text-blue-300 text-2xl font-extrabold italic '>
                 GoBeyond
             </div>
             <div>
               {
                !isLoggedIn ? 
                (<div>
                    <button className="m-1 p-3  bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400" type='submit' 
                onClick={()=>setFormType("login")}>
                  Login
                </button>
                <button className="m-1 p-3 bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400" onClick={()=>setFormType("signup")}>
                  SignUp
                </button>
                </div>):
                ( performance ? (<button className="m-1 mr-3 p-3 bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400"  onClick={backHandler} >Dashboard</button>) :
                (<button className="m-1 p-3 flex flex-row justify-center items-center   bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400" onClick={()=>setClicked(!clicked)}>
                 <div>Start Practice</div> 
                </button>)
                )
                }
             </div>
        </div>
     
    </div>
  
  )
}

export default Navbar