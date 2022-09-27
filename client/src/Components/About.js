import './Styling/About.css'

function About({userName}) {
  if(userName !== null){
    console.log(userName)
  }
  
  return (
    <div className='container-fluid'>

        <div className="col">"About me " </div>
        <div className="col"></div>
    </div>
  )
}

export default About