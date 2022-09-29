import React, {useState, useEffect} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'

function Schedule() {
    const[equipment, setEquipment] = useState([{id: "loading...", name: "loading...", deliveries: "loading..."}])
    const[updateEquipment, setUpdateEquipment]=useState(false)
    // let siteEquipment = equipment ?? [{id: "loading...", name: "loading...", deliveries: "loading..."}]
    const[errors, setErrors]=useState([])
    const [openSchedule, setOpenSchedule]= useState([])
    const[newEquipmentName, setNewEquipmentName] = useState("")
    // const[deliveries, setDeliveries]= useState()
    // send request for all schedules, I loop over and generate buttons
    // when I click on the button I return false to any otgher gates and true to choosen gate
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
    
    const confirmupdateEquipment =()=>{
        let id = openSchedule[0]
        // console.log(id)
        // fetch(`/equipments/${id}`,{
        // method:"PATCH",
        // headers:{'Content-Type':'application/json'},
        // body: JSON.stringify({name: })
        // })
        // .then(res =>{
        // if(res.ok){
        // res.json().then(console.log(res))
        // } else {
        // res.json().then(e => console.log(Object.entries(e.error).flat()))
        // }}) 
    }

    const handleConfirm = (event, action) => {
    console.log(event, action);
    if (action === "edit") {
      /** PUT event to remote DB */

    //    
      console.log("edit", {
         event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      })
       return{
        event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      }
    } else if (action === "create") {
      /**POST event to remote DB */
      console.log("create", {
        event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      })
      return{
        event_id: event.id,
        title: event.tutle,
        start: event.start,
        end: event.end
      }
    }
    };

    
    const [confirmedDeliveries, setConfirmDeliveries] =useState({})
    // let myEvents = confirmedDeliveries.map(element => ({event_id: element.id, title: element.store_place, start: element.start_time, end: element.finish_time})) ?? {"no": "events"}
    
    return (
    <div className="container-schedule">
            <Link to="/newequipment" state={{site_id: id, name: name}}>
                <button >Add new equipment</button>
            </Link> 


        
    {equipment.map(element => <button onClick={() => {
        console.log(element)
        setOpenSchedule([element.id, element.name]); 
        setConfirmDeliveries(element.deliveries) }}>{element.name}</button>)}
     
    {(openSchedule.length > 0 ? 
        (<div>Schedule number {openSchedule[1]} 
        <br/>
        <button onClick={()=>setUpdateEquipment(!updateEquipment)}> update equipment </button>
        {updateEquipment ? (
            <div> Update information: 

                <div>{openSchedule[1]}</div>
                <input />
                <button >Confirm</button>
            </div>
        ) : null}
        <Scheduler
            // view="month"
            onConfirm={handleConfirm}
        />
        </div>):(<> <br/><div>which schedule you want to display or create new delivery or add descrition</div></>))}
    </div>
  )
}

export default Schedule
