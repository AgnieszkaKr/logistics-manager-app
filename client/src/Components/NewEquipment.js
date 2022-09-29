import React, {useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
function NewEquipment() {
    const location = useLocation()
    const navigate = useNavigate()
    const {site_id, name} = location.state
    console.log("id", site_id, name)
    const[newEquipment, setNewEquipment]= useState({
        name: "",
        construction_id: site_id
    })

    const handleNewEquipment =()=>{
        fetch('/equipments',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newEquipment)
        })
        .then(res =>{
            if(res.ok){
            
            res.json().then(console.log(res))
        } else {
            res.json().then(e => console.log(Object.entries(e.error).flat()))
        }})
    navigate('/schedule', { state: { id: site_id, name: name} })

}
  return (
    <div className="container">
    <div>New equipment for {name} :</div>
    <form onSubmit={handleNewEquipment}>
    <div>Name of equipment </div>
    <input onChange={(e)=>setNewEquipment({...newEquipment, name: e.target.value}) }/>
    <button> Create </button> 

    </form>
    </div>
  )
}

export default NewEquipment