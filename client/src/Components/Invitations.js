import React, {useState, useEffect} from 'react'
import './Styling/Contractors.css'

function Invitations({id}) {
    const[invitations, setInvitations] = useState([{email: "Loading..."}])

    useEffect(() =>{
     
        fetch(`/invitations/site/${id}`)
        .then(req => req.json())
        .then(res => 
            {setInvitations(res)})
    },[])

    const handleRemoveInvitation = (id) =>{
    fetch(`/invitations/${id}`,{
    method:"DELETE",
    headers:{
        'Content-Type':'application/json',
    }})
    .then(req => {
        if(req.ok){
            let removeInvitation = invitations.filter(invitation => invitation.id !== id )
            setInvitations(removeInvitation) 
        }
    })
        
        
    }
  return (
     <div className='contractors-container'>
        <h4>Pending Invitations</h4>
        <h6>Contractors invited to the project who haven’t responded to the invitation</h6>
        <div className='contractors-dashboard'>
            <table class="table">
            <thead>
                <tr >
                <th scope="col"></th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                
                    {invitations.map(invitation =>  { return (
                        
                    <tr key={invitation.name}>  
                        <th scope="row" key={invitation.name}></th>
                        <td>{invitation.email}</td>
                        <td>{invitation.name}</td>
                        <td>{invitation.company}</td>
                        <td ><button className="contractor-remove-button" onClick={() => handleRemoveInvitation(invitation.id)}>X</button></td>
                    </tr>)
                    }
                )}

            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Invitations