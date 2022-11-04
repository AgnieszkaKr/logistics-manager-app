import React, {useEffect, useState} from 'react'
import './Styling/MyConstruction.css'
import { Link } from "react-router-dom";
import DashboardContractor from './DashboardContractor'

function MyConstructions({setCurrentSite}) {
    const[displayMySites, setDisplayMySites]=useState(true)
    const [mySites, setMySites] = useState([])
    const[contractorSites, setContractorSites]=useState([])
    useEffect(() =>{
        fetch('/managers/site')
        .then(req => req.json())
        .then(res => setMySites(res))

        fetch('contractors_sites')
        .then(req => req.json())
        .then(res => {setContractorSites(res)
        console.log(res)})


    },[])

  return (
    <div className='sites-container'>
        {mySites.length === 0  && contractorSites.length === 0 ? <div>No content to display</div> :
        <div className='row row-cols-2'>
            {mySites.length === 0 ?<div>.</div> :(mySites.map(b => 
                <div className="card"style={{width: "18rem"}} >
                    <img className="card-img-top"  src="https://plus.unsplash.com/premium_photo-1663054710563-598f084bdd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80" alt="Card image cap"/>
                    <div className="card-body" key={b.id}>
                    <p className="site-name">{b.building_name}</p>

                    <p>{b.address_street} Street
                    {b.address_city}</p>
                    <p className="role-site">ROLE: Logistic's Manager
                    </p>
                    {/* <img src={b.layout_plan} alt=''/> */}
                    <Link to="/schedule" state={{id: b.id, name: b.building_name }}>
                        <img src='./Arrow.png' alt='' className='construction-arrow' />
                    </Link> 
                </div></div>))}

            {contractorSites.length === 0 ?<div>.</div> :(contractorSites.map(b => 
                <div className="card"style={{width: "18rem"}} >
                <img className="card-img-top"  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image cap"/>
                <div className="card-body" key={b.id}>
                    <p className="site-name">{b.building_name}</p>
                    <p>{b.address_street} Street
                    {b.address_city}</p>
                    <p className="role-site">ROLE: Contractor
                    </p> 
                    <Link to="/dashboard_contractor" state={{id: b.id, name: b.building_name }}>
                        <img src='./Arrow.png' alt='' className='construction-arrow' />
                    </Link> </div>
            </div>))}
        </div>}
        


    </div>
  )
}

export default MyConstructions