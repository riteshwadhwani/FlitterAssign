import React from 'react'
import  { useNavigate } from 'react-router-dom'



const Card = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[300px] w-full z-10 bg-transparent flex gap-x-3 justify-around rounded-2xl">
       <div className='border gap-x-5 w-[330px] border-blue-300  bg-blue-950 rounded-xl flex justify-center items-center flex-col gap-y-5'>
       <div>
            <h2 className="text-blue-300 font-bold"> {data.language}</h2>
        </div>
        <div>
        <button 
        onClick={()=>navigate('/englishtest')}
        className="m-1 p-3 flex flex-row justify-center items-center   bg-tansparent text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400"  >
                {data.button}
           </button>
        </div>
       </div>
    </div>
  )
}

export default Card