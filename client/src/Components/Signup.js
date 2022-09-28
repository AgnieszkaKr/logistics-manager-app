import React, {useState} from 'react'
import "./Styling/Signup.css"
import ReactDOM from 'react-dom'
import Login from './Login'
import { Link } from "react-router-dom";

function Signup({setSignupWindow, signupWindow, setLogWindow, setUserCreatedMessage}) {
  const[newUser, setNewUser]=useState({
      name: '', 
      last_name: "", 
      company: "", 
      title:"", 
      email: "", 
      phone_number: "", 
      password: ""
  })
  const handleSignup =(e) =>{
    e.preventDefault()
    console.log("signup")
   
    fetch('/users',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then(res =>{
      if(res.ok){
        setSignupWindow(false);
        setLogWindow(true);        
        res.json().then(console.log(res))
      } else {
        res.json().then(e => console.log(Object.entries(e.error).flat()))
      }
    })

  }
  
  return ReactDOM.createPortal(
        <div className='signup-form'>
          <div className='signup-container'>
          <button className="close-window" onClick={()=> setSignupWindow(false)}> X</button>
            <form onSubmit={(e) => handleSignup(e)}>
                <div className='container'>
                  <div className="input-lable">Signu up  </div>
                
                    <br/>
                    <img className='logo-signup' src='./Logo.png' alt=''/>
                      <div>
                        <label className="input-lable" type="text">Name</label>
                            <br/>
                            <input className="input-field-user" type="text" name='name'value={newUser.name} onChange={(e=>setNewUser({...newUser, name: e.target.value}))} />
                        </div>
                        <div>
                        <label className="input-lable">Last name</label>
                            <br/>
                            <input className="input-field-user" type="text" name='last_name' value={newUser.last_name} onChange={(e=>setNewUser({...newUser, last_name: e.target.value}))}/>
                        </div>
                        <div>
                        <label className="input-lable">Email</label>
                            <br/>
                            <input className="input-field-user" type="email" name='email' value={newUser.email} onChange={(e=>setNewUser({...newUser, email: e.target.value}))}/>
                        </div>
                        <div>
                        <label className="input-lable">Company</label>
                            <br/>
                            <input className="input-field-user" type="text" name='company' value={newUser.company} onChange={(e=>setNewUser({...newUser, company: e.target.value}))}/>
                        </div>
                        <div>
                        <label className="input-lable">Title</label>
                            <br/>
                            <input className="input-field-user" type="text" name='title'value={newUser.title}  onChange={(e=>setNewUser({...newUser, title: e.target.value}))}/>
                        </div>
                        <div>
                        <label className="input-lable">Password</label>
                            <br/>
                            <input className="input-field-user" type="passwor" name='password' value={newUser.password} onChange={(e=>setNewUser({...newUser, password: e.target.value}))}/>
                        </div>
                        <div>
                        <br/>
                        <label className="input-lable">Password</label>
                            <br/>
                            <input className="input-field-user" type="password" name='password_confirmation' />
                        </div>
                        <br/>
                        <button className="signup-button" >Sign up</button>
                </div> 
            </form>
            <div className="input-lable">Already a member?</div>
            <button className="signup-button" onClick={()=> {setSignupWindow(false); setLogWindow(true)}}>Log in</button>
            </div>  
        </div>,
        document.getElementById('portal')
  )
}

export default Signup