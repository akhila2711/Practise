import React from 'react'
// import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import './App.css';
// // import Header from './component/Header/Header'
// import LifeCycle from './component/Header/lifeCycle';
// import Trainings from './component/trainings/trainings';
import CompA from './component/compA/compA';
export const userContext=React.createContext()
export const classContext=React.createContext()

 function App() {
  const userName="Akhi"
  return (
    <>
      <userContext.Provider value={"Risaya Academy"}>
        <classContext.Provider value={"crud Academy"}>
          <CompA></CompA>
        </classContext.Provider>
      </userContext.Provider>
    </>
  ) 
}
export default App;