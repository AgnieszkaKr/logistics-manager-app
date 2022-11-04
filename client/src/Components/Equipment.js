import React, {useState} from 'react'
import './Styling/Equipment.css'

function Equipment({id, name, equipment, setEquipment}) {
    const[newEquipment, setNewEquipment]= useState("")
    console.log(equipment)
    const handleEquipmentDelete =(id)=>{
            console.log(id)
               fetch(`/equipments/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json',
        }})
            .then(req => {if(req.ok){
                    let removeEquipment = equipment.filter(eq => eq.id !== id )
                    setEquipment(removeEquipment)
            }})

    }
    
    const handleNewEquipment =()=>{
        fetch('/equipments',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({site_id: id, name: newEquipment })
        })
        .then(res =>{
        if(res.ok){        
            res.json()
            .then(req => setEquipment([...equipment, {id: req.id, site_id: id, name: newEquipment }]))
        } else {
            res.json().then(e => console.log(e))
        }})
       
        
        setNewEquipment("")
    }
    return (
        <div>
            <div className="add-new-eq"><h4>Add equipment to generate new schedule</h4></div>
            <div>
            <input className ="input-field-user" value={newEquipment} onChange={(e)=> {setNewEquipment(e.target.value)}}/>
            </div>
            <div>
            <button className='add-new-equipment' onClick={handleNewEquipment}>Create</button>
            </div>
            <div>
            <table class="table">
            <thead>
                <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col"></th>
                <th scope="col">Name</th>
                {/* <th scope="col">Update Name</th> */}
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {equipment.map(eq =>
                
                    <tr key={eq.id}>  
                    <th scope="row"></th>
                        <td>{eq.name}</td>
                        {/* <td>
                            <input/>
                            <button>ok</button>
                        </td> */}
                        <td>
                            <button onClick={()=> handleEquipmentDelete(eq.id)}>X</button>
                        </td>
                    </tr>)
                }
            </tbody>
            </table>
            </div>
        
        </div>
  )
}

export default Equipment