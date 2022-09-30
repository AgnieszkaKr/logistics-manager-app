import React, {useState, useEffect} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'

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
    if (action === "edit") {
      /** PUT event to remote DB */
    
      console.log("edit", {
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
        let newDelivery = {
            equipment_id: openSchedule[0],
            title: event.title,
            start_time: event.start,
            finish_time: event.end
        }
        fetch('/deliveries',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(newDelivery)
        })
        .then(res =>{
        if(res.ok){
            res.json().then(setNewDeliveryRes({
                event_id: res.id,
                title: res.title,
                start: new Date(res.start_time),
                end: new Date(res.finish_time),
                admin_id: 1,
                color: "green"
            }));
        } else {
            res.json().then(e =>console.log(e.errors))  
        }
        // return doesnt work 
        console.log(newDelivery)

       })

    }
    };
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
    <div className="">
            <Link to="/newequipment" state={{site_id: id, name: name}}>
                <button >Add new equipment</button>
            </Link> 
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
        view="day"
            events={deliveryTransformed}
            onConfirm={handleConfirm}
        />
        </div>):(<> <br/><div>which schedule you want to display or create new delivery or add descrition</div></>))}
    </div>
  )
}

export default Schedule
