import React, {useState} from 'react'
import './Styling/Login.css'
import ReactDOM from 'react-dom'



function Login({setLogWindow, setUserName, setLoggedIn}) {
    const [errorLogIn, setErrorLogIn] = useState(null)

    
    const handleLogIn = async (e) =>{
        e.preventDefault()
        let name = e.target.email.value
        let password =  e.target.password.value
        fetch('/login',
        { 
        method:'POST',
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify({
        email: name, 
        password: password
        })
        }).then(req=> req.json({email: name, password: password}))
        .then (res => { if(res.response){
            setLogWindow(false)
            setLoggedIn(true)
            setUserName(res.response)
            setErrorLogIn(null)
           
        }else{
            setErrorLogIn(res.error)
        }}) 
  }


    
    return ReactDOM.createPortal(
        <div className='login-form'>
            <div className='login-container'>
            <button className="close-window" onClick={()=> setLogWindow(false)}> X</button>
            <form onSubmit={(e) => handleLogIn(e)}>
                <div className='container'>
                    <img src='./Logo.png' alt='' className="logo-login"/>
                    <div className='error-user'>{errorLogIn ? errorLogIn : null}</div>
                    <br/>
                        <div>
                        <label className="login-lable" type="email" >Email</label>
                            <br/>
                            <input className="input-field-user" type="email" name="email" />
                        </div>
                        <div>
                        <label className="login-lable" type="password">Password</label>
                            <br/>
                            <input className="input-field-user" type="password" name="password" />
                        </div>
                        <br/>
                        <div className="remember-me-field">
                            <br/>
                            <input className="checkbox-password" type="checkbox" />
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