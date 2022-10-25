import React, {useState} from 'react'
import './Styling/CreateNewConstruction.css'
import { useNavigate} from 'react-router-dom';

function CreatenewSite() {
    const navigate = useNavigate();
    const[responseNewSite, setResponseNewSite]=useState([])
    const [newSite, setNewSite]= useState({
        address_city: "",
        address_street:"",
        address_building_number:"",
        address_zip:"",
        building_name:"",
        layout_plan:"",
    })

    const createNewSite =(e) =>{
        setResponseNewSite(false)
        console.log(newSite)
        e.preventDefault()
        console.log('created')
        fetch('/sites',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newSite)
        })
        .then(res =>{
        if(res.ok){
            res.json().then(console.log);
            navigate('/myConstructions')
            setNewSite({
                address_city: "",
                address_street:"",
                address_building_number:"",
                address_zip:"",
                building_name:"",
                layout_plan:"",
            })
        } else {
            res.json().then(e => setResponseNewSite(e.errors))
            
        }
        })
        console.log(responseNewSite);
    }
    
    return (
    <div className='login-signup-form'>
      <div>Create new construction site </div>
      { responseNewSite ? responseNewSite.map(e => <div className='errors-new-construction'>{e}</div>) : null}
            <form onSubmit={(e)=> createNewSite(e)}>
                <div className='container'>
                    <br/>
                        <div>
                          <label className="new-constr-lable" type="email">Building name</label>
                            <br/>
                            <input className="input-field-new-site" type="text" name='building_name' value={newSite.building_name} onChange={e=> setNewSite({...newSite, building_name: e.target.value})} />
                        </div>
                        <br/>
                        
                        <label className="new-constr-lable" type="text">Address: </label>
                        <div>
                              <label className="new-constr-lable" type="text">Street</label>
                              <br/>
                              <input className="input-field-new-site" type="text" value={newSite.address_street} onChange={(e)=> setNewSite({...newSite, address_street: e.target.value})} />
                        </div>
                        <div>
                            <label className="new-constr-lable">Building number</label>
                            <br/>
                            <input className="input-field-new-site" type="text" value={newSite.address_building_number} onChange={(e)=> setNewSite({...newSite, address_building_number: e.target.value})}/>
                        </div>
                        <div>
                            <label className="new-constr-lable">Zip code</label>
                            <br/>
                            <input className="input-field-new-site" type="text" value={newSite.address_zip} onChange={(e)=> setNewSite({...newSite, address_zip: e.target.value})} />
                        </div>
                        <div>
                            <label className="new-constr-lable">City</label>
                            <br/>
                            <input className="input-field-new-site" type="text" value={newSite.address_city} onChange={(e)=> setNewSite({...newSite, address_city: e.target.value})}/>
                        </div>
                        <div>
                            <label className="new-constr-lable">Layout</label>
                            <br/>
                            <input className="input-field-new-site" type="text" value={newSite.layout_plan} onChange={(e)=> setNewSite({...newSite, layout_plan: e.target.value})} />
                        </div>
                        <br/>
                        <button> Create Construction Site</button>
                </div>
            </form>   
        </div>
    
    )
 }

export default CreatenewSite


