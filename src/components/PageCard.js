import React from 'react'
import {

    List,
    ListItem,
    ListItemButton,
    ListItemText,
  
  } from '@mui/material'

const PageCard = ({data,score,setScore,setCheck,check}) => {

//    console.log("opition clicked",clickedOption);
const onOptionSelect = (option) => {

    if (option === data.answer) {
      setScore(score + 1);
    }
    setCheck(true);
  };
   console.log("answer",data.answer);
  console.log(score)
  return (

    <div className='h-full w-full bg-blue-300' >
    <List sx={{ mt: 2 }} >
          <ListItemText>{data.id}.{data.question}</ListItemText>
          {data.options.map((option,i) => (
            <ListItem onClick={() => onOptionSelect(i+1)}>
           
              <ListItemButton className=' focus:bg-blue-800'
              >
              {option}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div><hr></hr></div>
   </div>
  )
}

export default PageCard