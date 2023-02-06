import './Styling/About.css'

function About({userName}) {
  if(userName !== null){
  }
  
  return (
    <div className='about-container'>
        <div className="card" >
            <img src="./construction2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Plan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>  

        <div className="card" >
            <img src="./con5.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Schedule</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

          <div className="card" >
              <img src="./construction1.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">Build</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    </div>
  )
}

export default About