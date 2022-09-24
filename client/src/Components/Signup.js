import React from 'react'
import "./Styling/Signup.css"
import ReactDOM from 'react-dom'

function Signup({setSignupWindow}) {

  return ReactDOM.createPortal(
        <div className='signup-form'>
          <div className='signup-container'>
          <button className="close-window" onClick={()=> setSignupWindow(false)}> X</button>
            <form>
                <div className='container'>
                    <br/>
                    <img className='logo-signup' src='./Logo.png' alt=''/>
                      <div>
                        <label className="input-lable" type="text">Name</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                        <label className="input-lable">Last name</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                        <label className="input-lable">Email</label>
                            <br/>
                            <input className="input-field-user" type="email" />
                        </div>
                        <div>
                        <label className="input-lable">Company</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                        <label className="input-lable">Title</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                        <label className="input-lable">Password</label>
                            <br/>
                            <input className="input-field-user" type="passwor" />
                        </div>
                        <div>
                        <br/>
                        <label className="input-lable">Password</label>
                            <br/>
                            <input className="input-field-user" type="passwor" />
                        </div>
                        <br/>
                        <button className="signup-button">Sign up</button>
                </div>
            </form> 
            </div>  
        </div>,
        document.getElementById('portal')
  )
}

export default Signup