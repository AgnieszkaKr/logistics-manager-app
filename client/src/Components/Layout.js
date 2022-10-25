import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './Styling/Layout.css'


function Layout({site_id, setDisplayLayout}) {
    const[layout, setLayout] = useState("Loading ...")
    const[errors, setErrors] = useState("")

   
    fetch(`/sites/${site_id}`)
        .then(res =>{
        if(res.ok){
            res.json()
            .then(e => setLayout(e.layout_plan));
        } else {
            res.json().then(e => setErrors(e.errors))}
        })

    
  return ReactDOM.createPortal(
        <div className='portal-container'>
            <div className='close-layout-button'>
            <button onClick={() => setDisplayLayout(false)}> X </button>
            </div>
            <img className='layout-plan-img' src={layout} alt="site layout"/>
        </div>,
        document.getElementById('portal'))
}

export default Layout