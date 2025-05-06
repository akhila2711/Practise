import React, { Component } from "react";

class ChildInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Child Input</h1>
        <input type="text" value={this.state.name} onChange={(e) => this.updateName(e)} />
        <button onClick={() => this.props.changeName(this.state.name)}>Change the name</button>
      </>
    );
  }
}

export default ChildInput;
