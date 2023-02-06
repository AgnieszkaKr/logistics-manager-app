import React, {useState} from 'react'
import './Styling/NewContractor.css'
function NewContractor(id) {
   
    const[newContractor, setNewContractor] = useState({
        name: "",
        company: "",
        email:""
    })
    const[contractorAdded, setContractorAdded]=useState(false)
    const[errors, setErrors]=useState([])
    const[companyError, setCompanyError]=useState(false)
    const[emailError, setEmailError]=useState(false)
    const handleInviteContractor=(e)=>{
        let newInvitation = {
                ...newContractor,
                site_id: id.id
            }
        e.preventDefault()
        fetch('/invitations',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newInvitation)
            })
            .then(res =>{
                if(res.ok){
                    setNewContractor({
                        name: "",
                        company: "",
                        email:""
                    })
                    setContractorAdded(true)
                    res.json().then(console.log(res))
                } else {
                    res.json().then(e => setErrors(e.errors))
                    if(errors.length >0){
                        console.log(errors)
                        if(errors[0].includes("Email") || errors[1].includes("Email")){
                            setEmailError(true)
                        }
                        if(errors[0].includes("Company") | errors[1].includes("Company")){
                            setCompanyError(true)
                        }
                    }
                }
            })}

  return (
    <div className='new-contractor-container'>
        {contractorAdded ? <div><h4>Your invitation was sent</h4> </div> : <div><h3>Invite new contractor to the project</h3></div>}
        <div className="invitation-form">
        <form className='invitation-form' onSubmit={handleInviteContractor}>
            {companyError ? <input className="contractor-input-error" placeholder="Company name can't be empty" type="text" name='company'value={newContractor.company}  onChange={(e=>setNewContractor({...newContractor, company: e.target.value}))}/> :
            <input className="contractor-input" placeholder="Company" type="text" name='company'value={newContractor.company}  onChange={(e=>setNewContractor({...newContractor, company: e.target.value}))}/>}

            <input className="contractor-input" placeholder="Name, last name" type="text" name='name' value={newContractor.name}  onChange={(e=>setNewContractor({...newContractor, name: e.target.value}))}/>
            
            {emailError ? <input className="contractor-input-error" type="text" placeholder="Email can't be blank" name='email'value={newContractor.email}  onChange={(e=>setNewContractor({...newContractor, email: e.target.value}))}/> :
            <input className="contractor-input" type="text" placeholder="Email" name='email'value={newContractor.email}  onChange={(e=>setNewContractor({...newContractor, email: e.target.value}))}/>}
            <button className="button-new-contractor">Send</button>                    
       </form> 
       </div>  
    </div>
  )
}

export default NewContractor