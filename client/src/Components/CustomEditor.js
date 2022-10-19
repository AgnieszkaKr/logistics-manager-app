// import React, {useState} from 'react'
// import type { ProcessedEvent, SchedulerHelpers} from "@aldabil/react-scheduler/types";
// import { TextField, Button, DialogActions } from "@mui/material";
// import { Scheduler } from "@aldabil/react-scheduler";

// interface CustomEditorProps {
//   scheduler: SchedulerHelpers;
// }

// const CustomEditor = ({ scheduler }: CustomEditorProps) => {
//   const event = scheduler.edited;

//   // Make your own form/state
//   const [state, setState] = useState({
//     title: event?.title || "",
//     description: event?.description || ""
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (value: string, name: string) => {
//     return ({event_id: event.id,
//             title: event.title,
//             start: event.start,
//             end: event.end})         
        
//   };
//   const handleSubmit = async () => {
//     // Your own validation
//     if (state.title.length < 3) {
//       return setError({ ...error, title: "Min 3 letters" });
//     }

//     try {
//       scheduler.loading(true);

//       /**Simulate remote data saving */
//       const added_updated_event = () =>{
//         return{
//             event_id: event.id,
//             title: event.title,
//             start: event.start,
//             end: event.end
//         }
//       }
//         /**
//          * Make sure the event have 4 mandatory fields
//          * event_id: string|number
//          * title: string
//          * start: Date|string
//          * end: Date|string
//          */
   

//       scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
//       scheduler.close();
//     } finally {
//       scheduler.loading(false);
//     }
//   };
//   return (
//     <div>
//       <div style={{ padding: "1rem" }}>
//         <p>New action</p>
//         <TextField
//           label="Title"
//           value={state.title}
//           onChange={(e) => handleChange(e.target.value, "title")}
//           error={!!error}
//           helperText={!!error && error["title"]}
//           fullWidth
//         />
//         <TextField
//           label="Description"
//           value={state.description}
//           onChange={(e) => handleChange(e.target.value, "description")}
//           fullWidth
//         />
//       </div>
//       <DialogActions>
//         <Button onClick={scheduler.close}>Cancel</Button>
//         <Button onClick={handleSubmit}>Confirm</Button>
//       </DialogActions>
//     </div>
//   );
// };
// export default CustomEditor