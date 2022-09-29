import React, {useState} from 'react'
import './Styling/NavBar.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';


function NavBar({setLogWindow, logWindow, userName, setSignupWindow, signupWindow, loggedIn, setUserName, setLoggedIn}) {
  const navigate = useNavigate()
  // const [userCreatedMessage, setUserCreatedMessage] = useState('')
  const handleLogOut =(e) =>{
    e.preventDefault()
    console.log("log out")
    fetch('/logout', {
      method: "DELETE",
    })
    .then(req => req.json)
    .then(res => console.log(res.error))
    setLoggedIn(false)
    navigate('/')
  }
  
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src='./Logo.png' className="logo-main-page"  alt=''/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav justify-content-end" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" userName={userName}>About</Link>
              </li>
              <li>
                {/* if user is logged in can create construction, if not pop up window to sign up/ log in */}
                {loggedIn ?
                  (<><Link className='nav-link' to='/createConstruction'>New Construction Site</Link>
                  <Link className='nav-link' to='/myConstructions'>My Constructions</Link></> ):
                  (<Link className='nav-link' onClick={() => setSignupWindow(!signupWindow)}>New Construction Site</Link>)
                }
                
              </li>
              {/* if user is logged in navbar has button logged out if not login/ signup */}
             {loggedIn ? <Link className='nav-link'  onClick={(e)=> handleLogOut(e) } >Log out</Link> : (
                <>
                      <li>
                          <Link className='nav-link' onClick={()=> setLogWindow(true)}  >Login</Link>
                      </li>
                      <li>
                          <Link className='nav-link' onClick={() => setSignupWindow(true)} >Signup</Link>
                      </li>
                </> 
              )
             }
            </ul>
          </div>
      </nav>
    
  )
}

export default NavBar