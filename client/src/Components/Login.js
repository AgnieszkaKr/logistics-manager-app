import React, {useState} from 'react'
import './Styling/Login.css'
function Login() {
    const[logIn, setLogIn]=useState(true)
    const handleLogin = () =>{

    }
    return (
        <div className='login-signup-form'>
            <form>
                <div className='container'>
                    <br/>
                        <div>
                        <label className="input-lable" type="email">Email</label>
                            <br/>
                            <input className="input-field-user" type="email" />
                        </div>
                        <div>
                        <label className="input-lable" type="password">Password</label>
                            <br/>
                            <input className="input-field-user" type="passwor" />
                        </div>
                        <br/>
                        <div className="remember-me-field">
                            <br/>
                            <input className="checkbox-passwordr" type="checkbox" />
                            <label className="input-lable">Remember me</label>
                        </div>
                        <button className="login-signup-button">Log in</button>
                </div>
            </form>   
        </div>
  )
}

export default Login