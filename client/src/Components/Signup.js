import React from 'react'

function Signup() {
  return (
        <div className='login-signup-form'>
            <form>
                <div className='container'>
                    <br/>
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
                        <button className="login-signup-button">Sign up</button>
                </div>
            </form>   
        </div>
  )
}

export default Signup