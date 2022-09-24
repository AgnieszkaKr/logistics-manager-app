import React from 'react'
import './Styling/Login.css'
import ReactDOM from 'react-dom'
function Login({setLogWindow}) {

    return ReactDOM.createPortal(
        <div className='login-form'>
            <div className='login-container'>
            <button className="close-window" onClick={()=> setLogWindow(false)}> X</button>
            <form>
                <div className='container'>
                    <img src='./Logo.png' alt='' className="logo-login"/>
                    <br/>
                        <div>
                        <label className="login-lable" type="email">Email</label>
                            <br/>
                            <input className="input-field-user" type="email" />
                        </div>
                        <div>
                        <label className="login-lable" type="password">Password</label>
                            <br/>
                            <input className="input-field-user" type="passwor" />
                        </div>
                        <br/>
                        <div className="remember-me-field">
                            <br/>
                            <input className="checkbox-passwordr" type="checkbox" />
                            <label className="login-lable">Remember me</label>
                        </div>
                        <button className="login-button">Log in</button>
                </div>
            </form> 
            </div>  
        </div>,
        document.getElementById('portal')
  )
}

export default Login