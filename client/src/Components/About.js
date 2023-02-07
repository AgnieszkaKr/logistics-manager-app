import './Styling/About.css'

function About({userName}) {
  if(userName !== null){
  }
  
  return (
    <div>
    <div className='about-container'>
        <div className="card" >
            <img src="./construction2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Plan</h5>
                <p className="card-text">A construction plan is a set of documents that defines the requirements for a construction project, such as the activities, resources, schedule and budget.</p>
            </div>
        </div>  

        <div className="card" >
            <img src="./construction1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Schedule</h5>
                <p className="card-text">A construction schedule is a timeline for a building project that construction managers use to determine the order and duration of construction activities.</p>
            </div>
        </div>

          <div className="card" >
              <img src="./construction1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Build</h5>
                  <p className="card-text">Construction management is a professional service that provides a project's owner(s) with effective management of the project's schedule, cost, quality, safety, scope, and function.</p>
            </div>
        </div>
        
    </div>
    <div className="contact-about">CONTACT</div>
    </div>
  )
}

export default About