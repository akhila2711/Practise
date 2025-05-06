import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import './App.css';
// import Header from './component/Header/Header'
import LifeCycle from './component/Header/lifeCycle';
import Trainings from './component/trainings/trainings';

export default class App extends Component {
  render() {
    return (
      <>
    
    <Router>
    <ul>
    <li> <Link to="/LifeCycle">Lifecycle</Link></li>
    <li> <Link to="/Trainings">Trainings</Link></li>
    
    </ul>
    <Routes>
      <Route path="/LifeCycle" element={<LifeCycle/>} />
      <Route path="/Trainings" element={<Trainings/>} />
      
    </Routes>
    </Router>
   
      </>
    )
  }
}


