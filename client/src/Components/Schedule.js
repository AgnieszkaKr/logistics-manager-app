import React, {useState, useEffect} from 'react'

import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'
import Layout from './Layout'
import Contractors from './Contractors'
import Equipment from './Equipment'
import NewContractor from './NewContractor'
import Invitations from './Invitations'

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
    const[pendingInvitations, setPendingInvitations]=useState(false)
    const[contractor, setContractor]=useState(false)
    // send request for all schedules, loop over and generate buttons
    // when  click on the button, return false to any other gates and true to choosen gate
    const location = useLocation()
    // site id:
    const {id , name} = location.state
    useEffect(() =>{
        fetch(`/equipment/site/${id}`)
        .then(res =>{
        if(res.ok){
            res.json()
            .then(e => setEquipment(e));
        } else {
            res.json().then(e => setErrors(e.errors))}
        })

    },[])


    const[newDeliveryRes, setNewDeliveryRes]=useState()


    const handleConfirm = (event, action) => {
        if (action === "edit") {
        // update event in state, 
         deliveryTransformed = deliveryTransformed.map(delivery => {
            if( delivery.event_id === event.event_id){

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

        } 
//CREATE NEW MESSAGE 
        if (action === "create") {
        /**POST event to remote DB */
            
            let newDelivery = {
                equipment_id: openSchedule[0],
                title: event.title,
                start_time: event.start,
                finish_time: event.end }
                console.log(newDelivery)
            fetch('/deliveries',{
                method:"POST",
                headers:{ 'Content-Type':'application/json'},
                body: JSON.stringify(newDelivery)})
                .then(res =>{
                    console.log(res)
                    if(res.ok){
                        res.json().then(console.log(res));
                    } else {
                        res.json().then(e =>console.log(e.errors))
                    }
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
        return deletedId
    }
    const [confirmedDeliveries, setConfirmDeliveries] =useState({})
    let deliveryTransformed = deliveries.map(d=>  ({
                                    event_id: d.id,
                                    title: d.title,
                                    start: new Date(d.start_time),
                                    end: new Date(d.finish_time),
                                    color: "green",
                                    key: 1
                                    // disabled: true
                                } ))
    // update/ drop works
    const updatedEvent = (time, updated) =>{
        let id = updated.event_id
        console.log("edit")
        // change deliveryTransformed and return it at the end
        deliveryTransformed = deliveryTransformed.map(delivery => {
            if( delivery.event_id === updated.event_id){
                delivery.start = updated.start
                delivery.end = updated.end
                return delivery
            }else {
                return delivery
            }
        })

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
        <div className="site-dashboard">
        <div className="schedule-dashboard">
            <ul class="nav nav-pills mb-3"  role="tablist">
                <li class="nav-item dropdown">
                    <button className="nav-link" id="" aria-current="page" data-bs-toggle="dropdown" data-bs-target="" aria-selected="true" onClick={() => {setDisplayLayout(false); setDisplaySchedule(true); setUpdateContractors(false); setEditEquipment(false); setAddContractor(false) ; setEditEquipment(false); setPendingInvitations(false) }} >SCHEDULE </button>
                    <ul className="dropdown-menu">
                        {equipment.map(element => <li ><div className="dropdown-item"   onClick={() => {
                            setDeliveries(element.deliveries)
                            let deliveryTransformed = deliveries.map(d=>  ({
                                            event_id: d.id,
                                            title: d.title,
                                            start: new Date(d.start_time),
                                            end: new Date(d.finish_time),
                                            color: "green"
                                        }))
                            setOpenSchedule([element.id, element.name]); 
                            setConfirmDeliveries(element.deliveries) }}>{element.name}</div></li>)}
                                
                    </ul>
                </li>           
                <li className="nav-item">
                    <button className="nav-link" id="pills-contact-tab"   type="button"   aria-selected="false" onClick={() => {setDisplayLayout(true) }}>Layout</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="" aria-selected="false"  onClick={()=> {setUpdateContractors(true); setDisplaySchedule(false); setEditEquipment(false); setEditEquipment(false); setAddContractor(false); setPendingInvitations(false)}}> Contractors</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() =>{ setUpdateContractors(false); setDisplaySchedule(false); setEditEquipment(false); setAddContractor(false); setPendingInvitations(true) }}>Invitations</button>
                </li>
                <li className="nav-item">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => {setDisplayLayout(false); setDisplaySchedule(false); setUpdateContractors(false); setEditEquipment(false); setAddContractor(true); setPendingInvitations(false)  }}>New contractor</button>
                </li>
                <li class="nav-item">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() =>{ setUpdateContractors(false); setDisplaySchedule(false); setEditEquipment(true); setAddContractor(false); setPendingInvitations(false) }}> Manage equipment</button>
                </li>
                
            </ul>
            </div>
            {displayLayout ? (
                <Layout site_id={id} setDisplayLayout={setDisplayLayout} /> 
            ): null}
            {pendingInvitations ? (
                <Invitations id={id} contractor={contractor} /> 
            ): null}

            {editEquipment ?
                <Equipment id={id} name={name} equipment={equipment} setEquipment={setEquipment}/>
            : null}
        
            {updateContractors ? <Contractors id={id} contractor={contractor}/>  : null} 
            {addContractor ? <NewContractor id={id} /> : null}
            {displaySchedule ?
            (<>
            <div className="equipment-button-container"> 
                <div className="access-points-buttons"> 
                
                </div>
            </div>
                {(openSchedule.length > 0 ?(
                <div className="schedule-open-container"><div className="displayed-schedule"><div className="title-schedule">SCHEDULE: {openSchedule[1].toUpperCase()}</div></div> 
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



