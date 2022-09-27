import React, {useState, useEffect} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation } from 'react-router-dom'

function Schedule() {
    const[equipment, setEquipment] = useState([])
    const[deliveries, setDeliveries]= useState()
    // send request for all schedules, I loop over and generate buttons
    // when I cick on the button I return false to any otgher gates and true to choosen gate
    const location = useLocation()
    // construction id:
    const {id} = location.state
    useEffect(() =>{
        fetch(`/equipment/site/${id}`)
        .then(req => req.json())
        .then(res => {
            setEquipment(res)
        })
    },[])
    

    const handleConfirm = (event, action) => {
    console.log(event, action);
    if (action === "edit") {
      /** PUT event to remote DB */
       return{
        event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      }
    } else if (action === "create") {
      /**POST event to remote DB */
      return{
        event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      }
    }
    };

    const [openSchedule, setOpenSchedule]= useState()
    const [confirmedDeliveries, setConfirmDeliveries] =useState({})
    let myEvents = confirmedDeliveries.map(element => ({event_id: element.id, title: element.store_place, start: element.start_time, end: element.finish_time})) ?? {"no": "events"}
    console.log(myEvents) 
    return (
    <div className="">
        {equipment.map(element => <button onClick={()=> {setOpenSchedule([element.id, element.name]); setConfirmDeliveries(element.deliveries)}} >{element.name}</button> )}
        {openSchedule ? (<div>Schedule number {openSchedule[1]}
            <Scheduler
            
            view="month"
            onConfirm={handleConfirm}
            />
        </div>) :  null}

    </div>
  )
}

export default Schedule
