import React, {useState} from 'react'
import './Styling/CreateNewConstruction.css'

function CreateNewConstruction() {
  const [newConstruction, setNewConstruction]= useState({
    
  })
  
    return (
    <div className='login-signup-form'>
      <div>Create new construction site </div>
            <form>
                <div className='container'>
                    <br/>
                        <div>
                          <label className="new-constr-lable" type="email">Building name</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <br/>
                        
                        <label className="new-constr-lable" type="text">Address: </label>
                        <div>
                              <label className="new-constr-lable" type="text">Street</label>
                              <br/>
                              <input className="input-field-user" type="text" />
                        </div>
                        <div>
                            <label className="new-constr-lable">Building number</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                            <label className="new-constr-lable">Zip code</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                            <label className="new-constr-lable">City</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                        <div>
                            <label className="new-constr-lable">Layout</label>
                            <br/>
                            <input className="input-field-user" type="text" />
                        </div>
                </div>
            </form>   
        </div>
    
    )
 }

export default CreateNewConstruction


