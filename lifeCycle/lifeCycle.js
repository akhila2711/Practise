import React, { Component } from "react";
import axios from "axios";
import "./lifeCycle.css"

class LifeCycle extends Component {
  constructor(){
    super()
    this.state={
      array:[]
    }
  }
  componentDidMount(){
     axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        console.log(res)
        this.setState({array:res.data})
      })
  }

  render() {
    const {array}=this.state
    return(
    <>
    <h1>Life Cycle</h1>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Username</th>
          <th>Website</th>
          <th>Email</th>
          </tr>
          </thead>
          <tbody>
            {array.map((item,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.website}</td>
                  <td>{item.email}</td>
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

export default LifeCycle;
