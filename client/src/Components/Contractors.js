import React, {useEffect, useState} from 'react'
import './Styling/Contractors.css'

function Contractors({id}) {
    
    
    const[contractors, setContractors]=useState([{user: {name: "Loading...", company:"Loading...", title:"Loading...", email:"Loading...", phone_number:"Loading..." }}])
    const[count, setCount]=useState(0)
    const[invitations, setInvitations] = useState([{email: "Loading..."}])
    useEffect(() =>{
        fetch('/contractors')
        .then(req => req.json())
        .then(res => 
            setContractors(res))
    
        fetch(`/invitations/site/${id}`)
        .then(req => req.json())
        .then(res => 
            {setInvitations(res)
            console.log(res)})
    },[])
  return (
    
    <div>
    <div className='contractors-dashboard'>Contractors:
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Company</th>
            <th scope="col">Title</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
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
                </tr>)
                }
            )}
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>

        </tbody>
        </table>
    </div>
         <div className='contractors-dashboard'>Invitations:
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            
                {invitations.map(invitation =>  { return (
                    
                <tr>  
                    <th scope="row"></th>
                    <td>{invitation.email}</td>
                </tr>)
                }
            )}
            <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>

        </tbody>
        </table>
    </div>

    </div>
  )
}

export default Contractors