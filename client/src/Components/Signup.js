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
      password: ""
  })
  const[errors, setErrors]=useState([])
  const[emptyEmail, setEmptyEmail]=useState(false)
  const[emptyPassword, setEmptyPassword]=useState(false)
  const[emptyCompany, setEmptyCompany]=useState(false)
  const[emailTaken,setEmailTaken]=useState(false)
  const handleSignup =(e) =>{
    e.preventDefault()
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
        res.json()
        .then(req => console.log(req))
      } else {
        res.json().then(e => {
          console.log(e.errors)
        setErrors(e.errors)
        if(e.errors.length >0){
    e.errors.forEach(element => {
      if(element.includes("Password")){
          setEmptyPassword(true)
      } else if(element.includes("Email has")){
        setEmptyEmail(true)
        setEmailTaken(true)
      }else if(element.includes("Company")){
        setEmptyCompany(true)
      }else if(element.includes("Email")){
        setEmptyEmail(true)}
      else{
        console.log(element)
      }
      })}})}})}

  
  return ReactDOM.createPortal(
      <div className='signup-form'>
          <div className='signup-container'>
              <button className="close-window" onClick={()=> setSignupWindow(false)}> X</button>
              <h5 className="header-signup" >SIGN UP</h5>
              <img className='logo-signup' src='./Logo.png' alt=''/>
              {emailTaken ? <div className="error-user" >Email has already been taken, try to log in</div> : <div style={{fontSize:"12px", color:"black" }}>//</div>}
              <form onSubmit={(e) => handleSignup(e)}>
                  <div className='signup-content'>
                      <div className="input-signup">
                          <div className="input-lable-signup"><label type="text">Name</label></div>
                          <input className="input-field-user" type="text" name='name'value={newUser.name} onChange={(e=>setNewUser({...newUser, name: e.target.value}))} />
                      </div>
                      <div className="input-signup">
                          <div className="input-lable-signup"><label>Last name</label></div>
                          <input className="input-field-user" type="text" name='last_name' value={newUser.last_name} onChange={(e=>setNewUser({...newUser, last_name: e.target.value}))}/>
                      </div>
                      <div className="input-signup">
                          <div className="input-lable-signup" ><label>Email</label></div>
                          {emptyEmail ? <input className= "input-field-user-error" placeholder="Email can't be blank" type="email" name='email' value={newUser.email} onChange={(e=>setNewUser({...newUser, email: e.target.value}))}/> :
                          <input className="input-field-user" type="email" name='email' value={newUser.email} onChange={(e=>setNewUser({...newUser, email: e.target.value}))}/>}
                      </div>
                      <div className="input-signup">
                          <div className="input-lable-signup"><label>Company</label></div>
                          {emptyCompany ? <input  className= "input-field-user-error" placeholder="Please provide company's name" type="text" name='company' value={newUser.company} onChange={(e=>setNewUser({...newUser, company: e.target.value}))}/> :
                          <input  className= "input-field-user" type="text" name='company' value={newUser.company} onChange={(e=>setNewUser({...newUser, company: e.target.value}))}/> }
                      </div>
                      <div className="input-signup">
                          <div className="input-lable-signup"><label>Title</label></div>
                          <input className="input-field-user"  type="text" name='title'value={newUser.title}  onChange={(e=>setNewUser({...newUser, title: e.target.value}))}/>
                      </div>
                      <div className="input-signup">
                          <div className="input-lable-signup"><label>Password</label></div>
                          {emptyPassword ? <input  className="input-field-user-error" placeholder="Password can't be blank" type="passwor" name='password' value={newUser.password} onChange={(e=>setNewUser({...newUser, password: e.target.value}))}/> :
                          <input  className="input-field-user" type="password" name='password' value={newUser.password} onChange={(e=>setNewUser({...newUser, password: e.target.value}))}/>}
                      </div> 
                      
                      <button className="signup-button" >Sign up</button>        
                  </div> 
                     
              </form>
            {/* <div className="signup-button-login">Already a member?<button className="signup-button" onClick={()=> {setSignupWindow(false); setLogWindow(true)}}>Log in</button></div> */}
          </div>  
      </div>,
      document.getElementById('portal')
  )
}

export default Signup