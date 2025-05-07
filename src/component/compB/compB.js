import React,{useContext} from 'react'
import { userContext, classContext,Age,Course} from '../../App'
import CompC from '../compC/compC'

export default function CompB() {
  const user=useContext(userContext)
  const name=useContext(classContext)
  const age=useContext(Age)
  const course=useContext(Course)
  return (
   <>
   <h1>Functional Component B-{user}</h1>
   <h2>{name}</h2>
    <h3>{age}</h3>
    <h4>{course}</h4>
   <CompC></CompC>
   </>
   )
}

