import React, {useState} from 'react'

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
            .then(req => req.json())
            .then(res => console.log(res))
        let removeEquipment = equipment.filter(eq => eq.id !== id )
        setEquipment(removeEquipment)
    }
    
    const handleNewEquipment =()=>{
        console.log({site_id: id, name: newEquipment })
        fetch('/equipments',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({site_id: id, name: newEquipment })
        })
        .then(res =>{
        if(res.ok){
            setEquipment(...equipment, {site_id: id, name: newEquipment});        
            res.json().then(console.log(res))
        } else {
            res.json().then(e => console.log(e))
        }})
    
        setNewEquipment("")
    }
    return (
        <div>
            <div>Add new equipment to generate new schedule</div>
            {name}

            <input value={newEquipment} onChange={(e)=> {setNewEquipment(e.target.value); console.log(e.target.value)}}/>
            <button onClick={handleNewEquipment}>Create</button>
            <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Update Name</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {equipment.map(eq =>
                
                    <tr>  
                    <th scope="row"></th>
                        <td>{eq.name}</td>
                        <td>
                            <input/>
                            <button>ok</button>
                        </td>
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