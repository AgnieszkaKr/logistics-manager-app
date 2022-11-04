import React, {useEffect, useState} from 'react'
import './Styling/Contractors.css'

function Contractors({id, contractor}) {
    
    
    const[contractors, setContractors]=useState([{user: {name: "Loading...", company:"Loading...", title:"Loading...", email:"Loading...", phone_number:"Loading..." }}])
    const[count, setCount]=useState(0)
    const[invitations, setInvitations] = useState([{email: "Loading..."}])
    useEffect(() =>{
        fetch(`/contractors/${id}`)
        .then(req => req.json())
        .then(res => 
            setContractors(res))
    
        fetch(`/invitations/site/${id}`)
        .then(req => req.json())
        .then(res => 
            {setInvitations(res)})
    },[])
    
    const handleRemoveContractor=(id)=>{

        fetch(`/contractors/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json',
        }})
            .then(req => {
                if(req.ok){
                    let removeContractor = contractors.filter(contractor => contractor.id !== id )
                    setContractors(removeContractor)
                }
            })
        
    }



  return (
    
    <div className="contractors-container"> 
    <div className='contractors-dashboard'>
        
        <table className="table">
        <thead className="thead-light">
            <tr>
            <th scope="col"></th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
            <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
                {contractors.map(contractor =>  { return (
                <tr> 
                <th scope="row"></th>
                    <td>{contractor.user.name}</td>
                    <td>{contractor.user.last_name}</td>
                    <td >{contractor.user.company}</td>
                    <td >{contractor.user.title}</td>
                    <td >{contractor.user.phone_number}</td>
                    <td >{contractor.user.email}</td>
                    <td ><button onClick={() => handleRemoveContractor(contractor.id)}>X</button></td>
                </tr>)
                }
            )}


        </tbody>
        </table>
    </div>
        

    </div>
  )
}

export default Contractors