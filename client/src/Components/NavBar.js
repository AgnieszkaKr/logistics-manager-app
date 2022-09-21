import React from 'react'
import './Styling/NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src='./Logo_black.png' className="logo-main-page"  alt=''/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav justify-content-end" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li>
                <Link className='nav-link' to='/createConstruction'>New Construction Site</Link>
              </li>
              <li>
                <Link className='nav-link' to='/login'>Login</Link>
              </li>
              <li>
                <Link className='nav-link' to='/'>Logout</Link>
              </li>
            </ul>
          </div>
      </nav>
    
  )
}

export default NavBar