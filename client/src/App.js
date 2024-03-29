
import './App.css';
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import CreateNewConstruction from './Components/CreateNewConstruction'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Schedule from './Components/Schedule'
import MyConstructions from './Components/MyConstructions'
import Equipment from './Components/Equipment'
import DashboardContractor from './Components/DashboardContractor'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

function App() {
  // true open login window
  const [logWindow, setLogWindow]= useState(false)
  // true open sign up window
  const [signupWindow, setSignupWindow] = useState(false)
  // true means that user is logged in
  const [loggedIn, setLoggedIn] = useState(false)
  // userName is UserID
  const [userName, setUserName] = useState(null)
  const [currentSite, setCurrentSite] = useState()
  
      useEffect(() => {
      fetch("/me")
      .then(req => req.json())
      .then(res => 
        {
          if(res.name){
        console.log(res)
        setLoggedIn(true)
        setUserName(res.name)}else{
          setLoggedIn(false)
        }}
      )
     }, []);
      console.log(loggedIn, userName)
      console.log(currentSite)
  return (
    <div className="container-main-page">
    
     <Router>
      
      <NavBar setLoggedIn={setLoggedIn} logWindow={logWindow} setLogWindow={setLogWindow} signupWindow={signupWindow} setSignupWindow={setSignupWindow} loggedIn={loggedIn} setUserName={setUserName} userName={userName}/>
        <Routes>
          myConstructions
        <Route exact key={4} path='/myConstructions' element={<MyConstructions setCurrentSite={setCurrentSite}/>}/>
        <Route exact key={4} path='/dashboard_contractor' element={<DashboardContractor/>}/>
        <Route exact key={4} path='/schedule' element={<Schedule/>}/>
        <Route exact key={2} path='/signup' element={<Signup/>}/>
        <Route exact key={2} path='/about' element={<About />}/>
        <Route exact key={2} path='/schedule/equpment' element={<Equipment />}/>
        <Route exac key={3} path='/createConstruction' element={<CreateNewConstruction loggedIn={loggedIn} setSignupWindow={setSignupWindow} signupWindow={signupWindow}/>} />
        <Route exact key={1} path='/' element={<Home/>}/>

        </Routes>
      </Router>
      {/* open login, signup window  */}
      {logWindow ? <Login setLogWindow={setLogWindow} setUserName={setUserName} setLoggedIn={setLoggedIn}/> : null}
      {signupWindow ? <Signup setSignupWindow={setSignupWindow} signupWindow={signupWindow} setLogWindow={setLogWindow}/> : null}

    <Footer />
    </div>
  );
}

export default App;
