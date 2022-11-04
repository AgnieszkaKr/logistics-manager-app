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
                <h5 className="header-login" >LOG IN</h5>
                <img className='logo-login' src='./Logo.png' alt=''/>
                {errorLogIn ? <div className="error-user">{errorLogIn}</div>:<div className="error-place">?????</div> }
                <form onSubmit={(e) => handleLogIn(e)}>
                    <div className='login-content'>
                        <div className="login-signup">
                        <div className="input-lable-login"><label type="email" >Email</label></div>
                            <input className="input-field-user" type="email" name="email" />
                        </div>
                        <div className="login-signup">
                            <div className="input-lable-login"><label type="password">Password</label></div>
                            <input className="input-field-user" type="password" name="password" />
                        </div>
                    </div>                       
                    <div className="remember-me-field">
                        <button className="login-button">Log in</button>
                    </div>
                </form> 
            </div>  
        </div>,
        document.getElementById('portal')
  )
}

export default Login