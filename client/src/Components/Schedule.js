import React, {useState, useEffect} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'
import Layout from './Layout'
import Contractors from './Contractors'
import Equipment from './Equipment'
import NewContractor from './NewContractor'

function Schedule() {
    const[equipment, setEquipment] = useState([{id: "loading...", name: "loading...", deliveries: "loading..."}])
    const[updateEquipment, setUpdateEquipment]=useState(false)
    const[errors, setErrors]=useState([])
    const[openSchedule, setOpenSchedule]= useState([])
    const[deliveries, setDeliveries] =useState([])
    const[displayLayout, setDisplayLayout]=useState(false)
    const[updateContractors, setUpdateContractors] = useState(false)
    const[editEquipment, setEditEquipment]=useState(false)
    const[displaySchedule, setDisplaySchedule] =useState(true)
    const[addContractor, setAddContractor] =useState(false)
    // send request for all schedules, loop over and generate buttons
    // when  click on the button, return false to any other gates and true to choosen gate
    const location = useLocation()
    // site id:
    const {id , name} = location.state
    console.log("id", id, "name",name)
    useEffect(() =>{
        fetch(`/equipment/site/${id}`)
        .then(res =>{
        if(res.ok){
            res.json()
            .then(e => setEquipment(e));
        } else {
            res.json().then(e => setErrors(e.errors))}
        })
        console.log(equipment)
    },[])

        console.log("equipment", equipment)
        console.log("errors equipment", errors)
        console.log(openSchedule)
    const[newDeliveryRes, setNewDeliveryRes]=useState()


    const handleConfirm = (event, action) => {
        console.log(event, action)
        if (action === "edit") {
        // update event in state, 
         deliveryTransformed = deliveryTransformed.map(delivery => {
            if( delivery.event_id === event.event_id){
                console.log(delivery)
                delivery.title = event.title
                delivery.start = event.start
                delivery.end = event.end
                return delivery
            }else {
                return delivery
            }
        })
           
        // send fetch request to update on server
        fetch(`/deliveries/${event.event_id}`,{
                method:"PATCH",
                headers:{ 'Content-Type':'application/json'},
                body: JSON.stringify({
                    finish_time: event.end,
                    start_time: event.start,
                    title: event.title,
                })})
                .then(res =>{
                    if(res.ok){
                        res.json().then(console.log);
                    } else {
                        res.json().then(e =>console.log(e.errors))
                    }})
        return{
            event_id: event.id,
            title: event.title,
            start: event.start,
            end: event.end
            }, deliveryTransformed

        } else if (action === "create") {
        /**POST event to remote DB */
        console.log(event.id)
            let newDelivery = {
                equipment_id: openSchedule[0],
                title: event.title,
                start_time: event.start,
                finish_time: event.end }
            fetch('/deliveries',{
                method:"POST",
                headers:{ 'Content-Type':'application/json'},
                body: JSON.stringify(newDelivery)})
                .then(res =>{
                    if(res.ok){
                        res.json().then(console.log);
                    } else {
                        res.json().then(e =>console.log(e.errors))
                    }
                
                console.log("return",{
                    event_id: event.id,
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end)})
                })
                return {
                    event_id: event.id,
                    title: event.title,
                    start: new Date(event.start),
                    end: new Date(event.end)}

            }
    }

    const handleDelete = (deletedId) => {
        fetch(`/deliveries/${deletedId}`,{
        method:'DELETE',
        headers:{
        'Content-Type':'application/json'
        } })
        .then(req => req.json())
        console.log(deletedId)
        return deletedId
    }
    const [confirmedDeliveries, setConfirmDeliveries] =useState({})
    let deliveryTransformed = deliveries.map(d=>  ({
                                    event_id: d.id,
                                    title: d.title,
                                    start: new Date(d.start_time),
                                    end: new Date(d.finish_time),
                                    color: "green"
                                } ))
    console.log(deliveryTransformed)
    // update/ drop works
    const updatedEvent = (time, updated) =>{
        let id = updated.event_id
        // change deliveryTransformed and return it at the end
        deliveryTransformed = deliveryTransformed.map(delivery => {
            if( delivery.event_id === updated.event_id){
                console.log(delivery)
                delivery.start = updated.start
                delivery.end = updated.end
                return delivery
            }else {
                return delivery
            }
        })
        console.log(deliveryTransformed)
        // send fetch request patch 
        fetch(`/deliveries/${id}`,{
                method:"PATCH",
                headers:{ 'Content-Type':'application/json'},
                body: JSON.stringify({
                    finish_time: updated.end,
                    start_time: updated.start
                })})
                .then(res =>{
                    if(res.ok){
                        res.json().then(console.log);
                    } else {
                        res.json().then(e =>console.log(e.errors))
                    }})

     return deliveryTransformed
    }
    


    return (
        <div className="schedule-dashboard">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button className="nav-link" aria-current="page" onClick={() => {setDisplayLayout(false); setDisplaySchedule(true); setUpdateContractors(false); setEditEquipment(false); setAddContractor(false) ; setEditEquipment(false) }} >SCHEDULE </button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() => {setDisplayLayout(true);setUpdateContractors(false); setEditEquipment(false) }}>Display layout</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link"  onClick={()=> {setUpdateContractors(true); setDisplaySchedule(false); setEditEquipment(false); setEditEquipment(false); setAddContractor(false)}}> Update contractor</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() => {setDisplayLayout(false); setDisplaySchedule(false); setUpdateContractors(false); setEditEquipment(false); setAddContractor(true)  }}>Add new contractor</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" onClick={() =>{ setUpdateContractors(false); setDisplaySchedule(false); setEditEquipment(true); setAddContractor(false) }}> Edit Equipment</button>
                </li>
            </ul>

            {displayLayout ? (
                <Layout site_id={id} setDisplayLayout={setDisplayLayout} /> 
            ): null}

            {editEquipment ?
                <Equipment id={id} name={name} equipment={equipment} setEquipment={setEquipment}/>
            : null}
        
            {updateContractors ? <Contractors id={id}/>  : null} 
            {addContractor ? <NewContractor id={id} /> : null}
            {displaySchedule ?
            (<>
            <div className="equipment-button-container"> 
                <div className="access-points-buttons"> 
                    {equipment.map(element => <button className='equipment-button' onClick={() => {
                    setDeliveries(element.deliveries)
                    let deliveryTransformed = deliveries.map(d=>  ({
                                    event_id: d.id,
                                    title: d.title,
                                    start: new Date(d.start_time),
                                    end: new Date(d.finish_time),
                                    color: "green"
                                }))
                    setOpenSchedule([element.id, element.name]); 
                    setConfirmDeliveries(element.deliveries) }}>{element.name}</button>)}
                </div>
            </div>
                {(openSchedule.length > 0 ?(
                <div className="schedule-open-container">Schedule number {openSchedule[1]} 
                    <Scheduler
                        view="week"
                        events={deliveryTransformed}
                        onConfirm={handleConfirm}
                        onDelete={handleDelete}
                        onEventDrop={updatedEvent}
                        month={{
                              weekDays: [0, 1, 2, 3, 4, 5, 6],
                              weekStartOn: 1,
                              startHour: 5,
                              endHour: 24,
                              step: 60,
                            }}
                        day={{
                          startHour: 5,
                          endHour: 24,
                          step: 60,
                         
                        }}
                        week={{
                            weekDays: [0, 1, 2, 3, 4, 5, 6],
                            weekStartOn: 1,
                            startHour: 5,
                            endHour: 24,
                            step: 60,

                        }}
                    />
                </div>):null)} 
            </>)
            : null }
                



            </div>
        
  )
}

export default Schedule



