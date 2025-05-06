import React, { Component } from "react";
import axios from "axios";
class Trainings extends Component {
  constructor(){
    super()
    this.state={
      array:[]
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/trainings")
     .then((res)=>{
       console.log(res)
       this.setState({array:res.data})
     })
 }
  render() {
    const {array}=this.state
    return (
      <>
      <h1>Trainings</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>course</th>
            <th>company</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          
            </tr>
            </thead>
            <tbody>

              {array.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.course}</td>
                    <td>{item.company}</td>
                  
                  </tr>
                )
              }
              )}
            </tbody>
          </table>
      </>
    )
  }
}

export default Trainings;
