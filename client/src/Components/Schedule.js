import React, {useState, useEffect} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'
import { useLocation, Link } from 'react-router-dom'
import type { ProcessedEvent, SchedulerHelpers} from "@aldabil/react-scheduler/types";
import { TextField, Button, DialogActions } from "@mui/material";
import CustomEditor from './CustomEditor.js'

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
        console.log(event, action)
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
    const deliveryTransformed = deliveries.map(d=>  ({
                                    event_id: d.id,
                                    title: d.title,
                                    start: new Date(d.start_time),
                                    end: new Date(d.finish_time),
                                    color: "green"
                                } ))
    console.log(deliveryTransformed)

    const updatedEvent = (time, updated) =>{
        console.log("time", time, "updated", updated)
        // return{
        //             event_id: event.id,
        //             title: event.title,
        //             start: new Date(event.start),
        //             end: new Date(event.end)}
        }
    


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
                        // onEventDrop={updatedEvent}
                        month={{
                              weekDays: [0, 1, 2, 3, 4, 5, 6],
                              weekStartOn: 1,
                              startHour: 6,
                              endHour: 24,
                              step: 60,
                            }}
                        day={{
                          startHour: 6,
                          endHour: 14,
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
            
            </div>):(null))}
        </div>
  )
}

export default Schedule






      // dialogMaxWidth="sm"
      // loading={loading}
      // view="month"
      // editable={false}
      // deletable={false}
      // selectedDate={new Date()}
      // height={800}
      // week={{
      //   weekDays: [0, 1, 2, 3, 4, 5],
      //   weekStartOn: 6,
      //   startHour: 7,
      //   endHour: 22,
      //   step: 60,
      //   cellRenderer: () => {
      //     return <>week</>;
      //   },
      // }}
      // 
      // day={{
      //   startHour: 6,
      //   endHour: 14,
      //   step: 60,
      //   cellRenderer: () => {
      //     return <h1>DAY</h1>;
      //   },
      // }}
      // day={{
      //   startHour: 8,
      //   endHour: 18,
      //   step: 20,
      // }}
      // remoteEvents={async (query) => {
      //   await new Promise((res, rej) => {
      //     setTimeout(() => {
      //       // setEvents(EVENTS);
      //       res("");
      //     }, 1000);
      //   });
      //   // return null;
      //   // return EVENTS;
      // }}
      // resources={[
      // {
      //   admin_id: 1,
      //   title: "One",
      //   mobile: "555666777",
      //   avatar: "https://picsum.photos/200/300",
      //   color: "#ab2d2d",
      // },
      // {
      //   admin_id: 2,
      //   title: "Two",
      //   mobile: "555666777",
      //   avatar: "https://picsum.photos/200/300",
      //   color: "#58ab2d",
      // },
      //   {
      //     admin_id: 3,
      //     title: "Three",
      //     mobile: "555666777",
      //     avatar: "https://picsum.photos/200/300",
      //     color: "#a001a2",
      //   },
      //   {
      //     admin_id: 4,
      //     title: "Four",
      //     mobile: "555666777",
      //     avatar: "https://picsum.photos/200/300",
      //     color: "#08c5bd",
      //   },
      // ]}
      // resourceFields={{
      //   idField: "admin_id",
      //   textField: "title",
      //   subTextField: "mobile",
      //   avatarField: "title",
      //   colorField: "color",
      // }}
      // resourceViewMode="tabs"
      // recourseHeaderComponent={(recourse) => {
      //   console.log(recourse);
      //   return <div>HAHA</div>;
      // }}
      // fields={[
      //   {
      //     name: "description",
      //     type: "input",
      //     config: { label: "Description", multiline: true, rows: 4 },
      //   },
      //   {
      //     name: "admin_id",
      //     type: "select",
      //     config: { label: "Assignee", required: true, multiple: "chips" },
      //     // default: [1, 2],
      //     options: [
      //       // {
      //       //   id: 1,
      //       //   text: "One",
      //       //   value: 1,
      //       // },
      //       {
      //         id: 2,
      //         text: "Two",
      //         value: 2,
      //       },
      //       {
      //         id: 3,
      //         text: "Three",
      //         value: 3,
      //       },
      //       {
      //         id: 4,
      //         text: "Four",
      //         value: 4,
      //       },
      //     ],
      //   },
      // ]}
      // onConfirm={async (event, action) => {
      //   console.log(action);
      //   return new Promise((res, rej) => {
      //     setTimeout(() => {
      //       res({
      //         ...event,
      //         event_id: event.event_id || Math.random(),
      //         // title: "From Custom",
      //         // start: new Date(new Date().setHours(11)),
      //         // end: new Date(new Date().setHours(18)),
      //       });
      //     }, 1000);
      //   });
      // }}
      // onDelete={async (id) => {
      //   await new Promise((res, rej) => {
      //     setTimeout(() => {
      //       setEvents((prev) => {
      //         return prev.filter((p) => p.event_id !== id);
      //       });
      //       res("");
      //     }, 1000);
      //   });
      // }}
      // customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
      // viewerExtraComponent={(fields, e) => {
      //   return (
      //     <div>
      //       {Array.from("a".repeat(50)).map((a, i) => (
      //         <div key={i}>Extra</div>
      //       ))}
      //     </div>
      //   );
      //   // console.log(fields, e);
      //   // return (
      //   //   <div>
      //   //     {fields.map((a, i) => (
      //   //       <div key={i}>{e.description}</div>
      //   //     ))}
      //   //   </div>
      //   // );
      // }}
      // viewerTitleComponent={(event) => <>{event.title}</>}
      // direction="rtl"
      //  locale={ptBR}
      //  hourFormat={"24"}
      //  translations={{
      //   navigation: {
      //     month: "Mês",
      //     week: "Semana",
      //     day: "Dia",
      //     today: "Hoje"
      //   },
      //   form: {
      //     addTitle: "Novo Evento",
      //     editTitle: "Editar Evento",
      //     confirm: "Confirmar",
      //     delete: "Excluir",
      //     cancel: "Cancelar",
      //   },
      //   event: {
      //     title: "Título",
      //     start: "Início",
      //     end: "Fim"
      //   },
      //   moreEvents: "mais..."
      // }}
      // onEventDrop={async (time, updated) => {
      //   return new Promise((res) => {
      //     setTimeout(() => {
      //       setEvents((prev: any) => {
      //         return prev.map((e) =>
      //           e.event_id === updated.event_id ? updated : e
      //         );
      //       });
      //       res();
      //     }, 1000);
      //   });
      // }}


