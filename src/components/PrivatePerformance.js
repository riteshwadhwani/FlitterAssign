import React from 'react'
import {Navigate} from 'react-router-dom';


const PrivatePerformance = ({ children,performance}) => {
    
  if(performance===true) {
    return children;
  }
  else {
    return <Navigate to="/"/>
  }
}

export default PrivatePerformance
