import React from 'react'
import './Styling/Home.css'

function Home() {
  return (
      <div className="container-home">
              <div className="home-text">
                  <div>
                  <h1>Constarx</h1><h4>YOUR LOGISTICS MANAGER</h4>
                  <p></p>
                  <p>We want to help you to manage logistics throughout your organization. 
                  We can help you to organize, store and monitor the distribution of goods to ensure items and resources are delivered to their appropriate destinations.
                  </p>
                </div>
                </div>
                <div className="home-logo">
                    <img src='./Logo.png' alt=""/>
                </div>
      </div>
        
  )
}

export default Home