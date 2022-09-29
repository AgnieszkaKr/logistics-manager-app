import React, {useEffect, useState} from 'react'
import './Styling/MyConstruction.css'
import { Link } from "react-router-dom";

function MyConstructions({setCurrentSite}) {
    const [mySites, setMyySites] = useState([])
    useEffect(() =>{
        fetch('/constructions')
        .then(req => req.json())
        .then(res => setMyySites(res))
    },[])
    console.log(mySites)
  return (
    <div className='sites-container'>
    <br/>
    <div className='sites-manager-container'>
        <div>MyConstructions</div>
        {mySites.length === 0 ?<div>It seems that you don't have acces to any sites.Create one or ask for invitation.</div> :(mySites.map(b => 
        <div className="user-sites">
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
    </div>
  )
}

export default MyConstructions