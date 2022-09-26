import React, {useState} from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import './Styling/Schedule.css'

function Schedule() {
    // send request for all schedules, I loop over and generate buttons
    // when I cick on the button I return false to any otgher gates and true to choosen gate

   let arr = ["gate 1", "gate 2", "gate 3"]
   const [openSchedule, setOpenSchedule]= useState(0)
    
  return (
    <div className="">
        {arr.map((element, index) => <button  onClick={(e)=>setOpenSchedule(index)}>{element}</button> )}
        <button > Gate 1 </button>
        <div>Schedule number {arr[openSchedule]}
            <Scheduler 
            />
        </div>

    </div>
  )
}

export default Schedule
