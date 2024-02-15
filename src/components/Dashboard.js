import React from 'react'
import Card from './Card'
import { data } from '../assets/data'

const Dashboard = ({clicked}) => {
  
  return (
      <div className='h-[650px] w-full z-0 image-div flex flex-col items-center '>
            <div className="flex h-[600px] flex-row w-full justify-around ">
                      <div className="h-[300px] w-[300px] border-2 border-blue-200 flex flex-col justify-evenly bg-blue-50 bg-opacity-5">
                           <h2 className='font-bold text-blue-300 text-xl'>Language practice with Gobeyond</h2>
                           <p className='text-blue-300 italic'>Play games and Quizes and improve your ability.</p>
                      </div>
                      <div className="h-[300px] w-[300px] border-2 border-blue-200 flex flex-col justify-evenly bg-blue-50 bg-opacity-5">
                         <h2 className='font-bold text-blue-300 text-xl'>Vocabulary</h2>
                        <p className='text-blue-300 italic'> In order to speak and express yourself clearly, you need a solid base of vocabulary. </p>
                      </div>
                      <div className="h-[300px] w-[300px] border-2 border-blue-200 flex flex-col justify-evenly bg-blue-50 bg-opacity-5">
                         <h2 className='font-bold text-blue-300 text-xl'>Pronunciation</h2>
                          <p >Listen carefully to the pronunciation of words and phrases and try them for yourself perfecting your accent and intonation.</p>
                      </div>
                  
                      </div>
                      <div className='w-[880px] h-[150px] border border-blue-300 rounded-lg -mt-[260px] text-center text-xl text-blue-200 italic '>
                      <div className="w-full rounded-md bg-blue-400">Instruction</div>
                        <p>
                         Pay attention to this thing, if you select any option during the test, you will not be able to select that option again.</p>
                        <p className=' text-red-500'>
                         Currently only English test is available</p>
                      </div>
          
                      <div className="-mt-[490px] w-full">
                      {clicked && (<div className='flex h-full '>
                      {
                          data.map((data)=>{
                              return <Card data={data}></Card>
                          })
                      }
                     </div>)}
           </div>


       
    </div>
    
  )
}

export default Dashboard