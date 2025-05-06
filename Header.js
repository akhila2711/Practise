import React, { Component } from "react";
// import HeaderChild from "./HeaderChild";
import ChildInput from "./childInput";
class Header extends Component {
  constructor(){
    super()
    this.state={
      name:"Akhi",
      address:"Chennai"
      
    }
  }
  // updateAddress=()=>{
  //   this.state.address="kerala"
  //   console.log(this.state)

  // }
  updateAddress=()=>{
    this.setState({address:"Kerala"})

  }
  dynamicName=(name)=>{
    this.setState({name:name})
  }
  
  
  render() {
    return (
      <>
      {/* <h1>information in react</h1>
      Name is :{this.state.name} and  Age is {this.state.address}
      <button onClick={this.updateAddress}>Change Address</button> */}
      {/* <HeaderChild data={this.state} changeAddress={this.updateAddress}></HeaderChild> */}

      parent-Namee{this.state.name} addres is{this.state.address}
      <ChildInput changeName={this.dynamicName}></ChildInput>
      </>
    )
  }
}

export default Header;
