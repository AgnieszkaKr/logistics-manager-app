import React, {useEffect, useState} from 'react'
import './Styling/MyConstruction.css'
import { Link } from "react-router-dom";

function MyConstructions({setCurrentSite}) {
    const [sitesManager, setSitesManager] = useState([])
    useEffect(() =>{
        fetch('/constructions')
        .then(req => req.json())
        .then(res => setSitesManager(res))
    },[])
    console.log(sitesManager.id)
  return (
    <div className='sites-container'>
    
    <br/>
    <div className='sites-manager-container'>
        <div>MyConstructions</div>
        
        {/* What if user has many construction as a Manager  */}
        <div> {sitesManager.id}</div>
        <div>Building name: {sitesManager.building_name}</div>
        <div>Street: {sitesManager.address_street}</div>
        <div>Building number: {sitesManager.address_building_number}</div>
        <div>City: {sitesManager.address_city}</div>
        <div>Zip code: {sitesManager.address_zip}</div>
        {/* <img src={sitesManager.layout_plan} alt=''/> */}
        {/* CHANGE ID TO REAL ID!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <Link to="/schedule" state={{id: sitesManager.id}}
        >
        <img src='./Arrow.png' alt='' className='construction-arrow' />
        </Link>
    {/* <div> Contractor </div> */}
    </div>
    </div>
  )
}

export default MyConstructions