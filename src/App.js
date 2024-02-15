import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Test from './pages/Test'

import PerformancePage from './pages/PerformancePage';
function App() {
  const [formType,setFormType] = useState("signup");
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [clicked,setClicked] =useState(false);
  const [score,setScore] =useState(0);
  const [performance,setPerformance] = useState(false);
  return (
    <div className=' bg-blue-950'>
      <Navbar  setFormType={setFormType}
      setPerformance={setPerformance}
      isLoggedIn={isLoggedIn}
      clicked={clicked}
      setClicked={setClicked}
      setIsloggedIn={setIsLoggedIn}
      performance={performance}
        className="h-[20%] "

      />
      <Routes>
        <Route path='/' element={<Home formType={formType} setFormType={setFormType} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/englishtest' element={<Test score={score} setPerformance={setPerformance} performance={performance}  setScore={setScore}/>}/>
        <Route path='/performance' element={
          <PerformancePage score={score} performance={performance}/>
       }/>
        <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard 
            clicked={clicked}
          />
        </PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
