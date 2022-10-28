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
        <div className="schedule-dashboard">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button className="nav-link" onClick={() => setDisplayMySites(true)}>My construction sites</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() => setDisplayMySites(false)}>Construction Sites</button>
                </li>
            </ul>

        {displayMySites ? (
             <div className='sites-manager-container'>
                <div>You manage logistics on:</div>
                {mySites.length === 0 ?<div>It seems that you don't have acces to any sites.Create one or ask for invitation.</div> :(mySites.map(b => 
                <div className="user-sites" key={b.id}>
                    <div>{b.building_name}</div>
                    <div>Address: </div>
                    <div>{b.address_building_number}</div>
                    <div>{b.address_street}</div>
                    <div>{b.address_zip}</div>
                    <div>{b.address_city}</div>
                    {/* <img src={b.layout_plan} alt=''/> */}
                    <Link to="/schedule" state={{id: b.id, name: b.building_name }}>
                        <img src='./Arrow.png' alt='' className='construction-arrow' />
                    </Link> 
                </div>))}
            </div>
        ):(
             <div className='sites-manager-container'>
                <div>Constraction Sites </div>
                {contractorSites.length === 0 ?<div>It seems that you don't have acces to any sites.Create one or ask for invitation.</div> :(contractorSites.map(b => 
                <div className="user-sites" key={b.id}>
                    <div>{b.building_name}</div>
                    <div>Address: </div>
                    <div>{b.address_building_number}</div>
                    <div>{b.address_street}</div>
                    <div>{b.address_zip}</div>
                    <div>{b.address_city}</div>
                    {/* <img src={b.layout_plan} alt=''/> */}
                    <Link to="/dashboard_contractor" state={{id: b.id, name: b.building_name }}>
                        <img src='./Arrow.png' alt='' className='construction-arrow' />
                    </Link> 
                </div>))}
            </div>
        )}











   
    </div>
    </div>
  )
}

export default MyConstructions