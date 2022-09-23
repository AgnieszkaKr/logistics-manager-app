import React from 'react'

function CreateNewConstruction() {
  return (
        <div className='login-signup-form'>
          Create new construction (if user is not logged in then sign/up log in if is looged in then create new constr)
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

export default CreateNewConstruction