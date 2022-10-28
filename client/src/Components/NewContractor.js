import React, {useState} from 'react'

function NewContractor(id) {
   
    const[newContractor, setNewContractor] = useState({
        name: "",
        company: "",
        email:""
    })
    const[contractorAdded, setContractorAdded]=useState(false)
    const[errors, setErrors]=useState([])
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
                    res.json().then(e => console.log(e.errors))
                }
            })}

  return (
    <div>
        {contractorAdded ? <div>Your invitation was sended. </div> : null}
        <form onSubmit={handleInviteContractor}>
            <div>
                <label className="contractor-input-lable">Company</label>
                <input className="input-field-user" type="text" name='company'value={newContractor.company}  onChange={(e=>setNewContractor({...newContractor, company: e.target.value}))}/>
            </div>
            <div>
                <label className="contractor-input-lable">Name, last name</label>
                <input className="input-field-user" type="text" name='name' value={newContractor.name}  onChange={(e=>setNewContractor({...newContractor, name: e.target.value}))}/>
            </div>
            <div>
                <label className="contractor-input-lable">Email</label>
                <input className="input-field-user" type="text" name='email'value={newContractor.email}  onChange={(e=>setNewContractor({...newContractor, email: e.target.value}))}/>
            </div>    
            <button>Invite</button>                    
       </form>   
    </div>
  )
}

export default NewContractor