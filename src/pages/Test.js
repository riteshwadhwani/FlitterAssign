import React, { useState } from 'react'

import { testDataEnglish as data } from '../assets/data'
import PageCard from '../components/PageCard';
import { useNavigate } from 'react-router-dom';

const Test = ({score,setScore,setPerformance}) => {
  const [check,setCheck] = useState(false);
    const navigate = useNavigate();

    function submitHandler(){
      setPerformance(true);
       navigate('/performance');
    }
  return (
    <div className='h-full w-full bg-blue-400'>
    <div >
    {
        data.map((data)=>{
            return <PageCard data={data} 
                score={score}
                setScore={setScore}
                setCheck={setCheck}
                check={check}
            />
        })
    }
    </div>
    <button className="m-1 p-3  bg-blue-700 hover:bg-blue-950  text-blue-300 border shadow-blue-100 rounded-md hover:shadow-2xl hover:shadow-blue-400" onClick={submitHandler}>Submit</button>
    
    </div>
  )
}

export default Test

