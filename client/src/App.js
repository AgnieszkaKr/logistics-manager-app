
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import CreateNewConstruction from './Components/CreateNewConstruction'
import Login from './Components/Login'
import Signup from './Components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux"
function App() {
    // const counter = useSelector(state => state.isLoggedIn)

  return (
    <div className="">
    
     <Router>
      
      <NavBar />
        <Routes>
        <Route exact key={2} path='/signup' element={<Signup/>}/>
        <Route exact key={2} path='/about' element={<About/>}/>
        <Route exact key={1} path='/login' element={<Login/>}/>
        <Route exac key={3} path='/createConstruction' element={<CreateNewConstruction />} />
        <Route exact key={1} path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>



    </div>
  );
}

export default App;
