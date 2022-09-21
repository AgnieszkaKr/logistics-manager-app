import React, {useState} from 'react'
import './Styling/Login.css'
function Login() {
    const[logIn, setLogIn]=useState(false)
    const handleLogin = () =>{

    }
    return (
        <div className='login-signup-form'>
            <button onClick={handleLogin}>Login</button>
            <button>Signup</button>
            <div className='container'>
                <br/>
                {logIn ? (<form>
                    <input type="text" placeholder="email"/>
                    <br/>
                    <input type="email" placeholder="password"/>
                    <br/>
                    <button>Log in</button>
                </form> ):
                ( <form>
                    <input type="text" placeholder="email"/>
                    <br/>
                    <input type="email" placeholder="password"/>
                    <br/>
                    <input type="text" placeholder="email"/>
                    <br/>
                    <input type="email" placeholder="password"/>
                    <br/>
                    <input type="text" placeholder="email"/>
                    <br/>
                    <input type="email" placeholder="password"/>
                    <br/>
                    <button>Sign In</button>
                </form> )}

                
            </div>
        </div>
  )
}

export default Login