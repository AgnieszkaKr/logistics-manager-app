import React, {useState, useEffect} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'
import type { ProcessedEvent, SchedulerHelpers} from "@aldabil/react-scheduler/types";
import { TextField, Button, DialogActions } from "@mui/material";


function Schedule() {
    const[equipment, setEquipment] = useState([{id: "loading...", name: "loading...", deliveries: "loading..."}])
    const[updateEquipment, setUpdateEquipment]=useState(false)
    const[errors, setErrors]=useState([])
    const[openSchedule, setOpenSchedule]= useState([])
    const[deliveries, setDeliveries] =useState([])
    // send request for all schedules, I loop over and generate buttons
    // when I click on the button I return false to any other gates and true to choosen gate
    const location = useLocation()
    // construction id:
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
    // FOR CONSIDERation ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/
    // Diffrent color for the owner
   
    // Create new delivery
    const handleConfirm = (event, action) => {
        console.log(event)
        if (action === "edit") {
        /** PUT event to remote DB */
            console.log({
            event_id: event.id,
            title: event.title,
            start: event.start,
            end: event.end
        })

        return{
            event_id: event.id,
            title: event.title,
            start: event.start,
            end: event.end
        }
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
                    event_id: Math.floor(Math.random() * 10),
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
    const deliveryTransformed = deliveries.map(d=>  ({
                                    event_id: d.id,
                                    title: d.title,
                                    start: new Date(d.start_time),
                                    end: new Date(d.finish_time),
                                    color: "green"
                                } ))
    console.log(deliveryTransformed)




    return (
        <div className="schedule-dashboard">
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
                <div>
                    <Link to="/newequipment" state={{site_id: id, name: name}}>
                        <button >Add new equipment</button>
                    </Link> 
                </div>
            </div>
       
        
            {(openSchedule.length > 0 ? 
                (<div className="schedule-open-container">Schedule number {openSchedule[1]} 
                
                {/* <button onClick={()=>setUpdateEquipment(!updateEquipment)}> update equipment </button> */}
                {updateEquipment ? (
                <div> Update information: 
                    <div>{openSchedule[1]}</div>
                    <input />
                    <button >Confirm</button>
                </div>
            ) : null}
                
                    <Scheduler
                        view="day"
                        events={deliveryTransformed}
                        onConfirm={handleConfirm}
                        onDelete={handleDelete}
                    />
            
            </div>):(null))}
        </div>
  )
}

export default Schedule
