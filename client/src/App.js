
import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import CreateNewConstruction from './Components/CreateNewConstruction'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Schedule from './Components/Schedule'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // true open login window
  const [logWindow, setLogWindow]= useState(false)
  // true open sign up window
  const [signupWindow, setSignupWindow] = useState(false)
  // true means that user is logged in
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div className="">
    
     <Router>
      
      <NavBar logWindow={logWindow} setLogWindow={setLogWindow} signupWindow={signupWindow} setSignupWindow={setSignupWindow} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
        <Route exact key={4} path='/schedule' element={<Schedule/>}/>
        <Route exact key={2} path='/signup' element={<Signup/>}/>
        <Route exact key={2} path='/about' element={<About/>}/>
        <Route exact key={1} path='/login' element={<Login/>}/>
        <Route exac key={3} path='/createConstruction' element={<CreateNewConstruction loggedIn={loggedIn} setSignupWindow={setSignupWindow} signupWindow={signupWindow}/>} />
        <Route exact key={1} path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>
      {logWindow ? <Login setLogWindow={setLogWindow} /> : null}
      {signupWindow ? <Signup setSignupWindow={setSignupWindow} signupWindow={signupWindow} setLogWindow={setLogWindow}/> : null}


    </div>
  );
}

export default App;
