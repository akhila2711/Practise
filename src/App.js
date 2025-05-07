import React from 'react'
// import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import './App.css';
// // import Header from './component/Header/Header'
// import LifeCycle from './component/Header/lifeCycle';
// import Trainings from './component/trainings/trainings';
import CompA from './component/compA/compA';
export const userContext=React.createContext()
export const classContext=React.createContext()
export const userNameContext=React.createContext()
export const Age=React.createContext()
export const Course=React.createContext()

 function App() {
  const userName="Akhi"
  return (
    <>
      <userContext.Provider value={"Risaya Academy"}>
        <classContext.Provider value={"crud Academy"}>
          <userNameContext.Provider value={"Akhila"}>
            <Age.Provider value={25}>
              <Course.Provider value={"React"}>
             
           
            <CompA></CompA>
            </Course.Provider>
            </Age.Provider>
          </userNameContext.Provider>
        </classContext.Provider>
      </userContext.Provider>
    </>
  ) 
}
export default App;