import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
const PerformancePage = ({score}) => {
    let value = score*10;
  return (
    <div className='h-[625px] w-full bg-blue-950 flex flex-col justify-center items-center'>
    <div className='text-3xl font-bold text-start text-blue-100'>Performance</div>
    <div className="h-[400px] w-[400px] flex justify-evenly items-center flex-col gap-y-3">
    <ProgressBar completed={value} className='w-full'/>
        <div className="text-white text-2xl font-serif ">
            <h2>Score:</h2>
            <p>{score}/10</p>
        </div>
    </div>
    {
        score<5 && <div className="h-[150px] w-[880px] border border-blue-300 bg-blue-200 bg-opacity-20 text-blue-100 flex flex-col gap-y-4 justify-center items-center">
            <div>Low Score??</div>
            <button className='border border-blue-200 p-2 cursor-pointer hover:bg-blue-700 rounded-lg'>Check Our Courses to improve now!!</button>
        </div>
    }
      
    </div>
  )
}

export default PerformancePage