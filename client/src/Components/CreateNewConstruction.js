import React, {useState} from 'react'
import './Styling/CreateNewConstruction.css'
import { useNavigate} from 'react-router-dom';

function CreatenewSite() {
    const navigate = useNavigate();
    const[responseNewSite, setResponseNewSite]=useState([])
    const[nameError, setNameError]=useState(false)
    const[layoutError, setLayoutError]=useState(false)
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
        e.preventDefault()
        fetch('/sites',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newSite)
        })
        .then(res =>{
        if(res.ok){
            res.json().then();
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
            res.json().then(e => {
            if(e.errors[1].includes("Layout") ){
                setLayoutError(true)
            }
            if(e.errors[0].includes("Layout")){
                setLayoutError(true)
            }
            if(e.errors[0].includes("name")){
                setNameError(true)
            }
            if(e.errors[1].includes("name") ){
                setNameError(true)
            }
        }) 
        }})
    }
    
    return (
    <div className='login-signup-form'>
      <h4>Create new construction site </h4>
      <div >
      { responseNewSite ? responseNewSite.map(e => <div className='errors-new-construction'>{e}</div>) : null}
            <form className='new-site-container' onSubmit={(e)=> createNewSite(e)}>
                {nameError ? <input className="input-field-new-site-error" placeholder="Building name can't be empty" type="text" name='building_name' value={newSite.building_name} onChange={e=> setNewSite({...newSite, building_name: e.target.value})} /> :
                <input className="input-field-new-site" placeholder="Building name" type="text" name='building_name' value={newSite.building_name} onChange={e=> setNewSite({...newSite, building_name: e.target.value})} />}
                <label className="new-constr-lable" type="text"></label>
                <input className="input-field-new-site" placeholder="Street" type="text" value={newSite.address_street} onChange={(e)=> setNewSite({...newSite, address_street: e.target.value})} />
                <input className="input-field-new-site" placeholder="Building number" type="text" value={newSite.address_building_number} onChange={(e)=> setNewSite({...newSite, address_building_number: e.target.value})}/>
                <input className="input-field-new-site" placeholder="Zip code" type="text" value={newSite.address_zip} onChange={(e)=> setNewSite({...newSite, address_zip: e.target.value})} />
                <input className="input-field-new-site" placeholder="City" type="text" value={newSite.address_city} onChange={(e)=> setNewSite({...newSite, address_city: e.target.value})}/>
                {layoutError ? <input className="input-field-new-site-error" placeholder="Layout can't be blank" type="text" value={newSite.layout_plan} onChange={(e)=> setNewSite({...newSite, layout_plan: e.target.value})} /> :
                <input className="input-field-new-site" placeholder="Layout" type="text" value={newSite.layout_plan} onChange={(e)=> setNewSite({...newSite, layout_plan: e.target.value})} />}
                <button className="button-new-construction"> Create Construction Site</button>  
            </form>  
        </div> 
    </div>
    )
}

export default CreatenewSite


