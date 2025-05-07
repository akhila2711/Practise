import React, { Component } from "react";
import { userContext, classContext, userNameContext } from "../../App";

class CompC extends Component {
  render() {
    return (
      <>
        <userContext.Consumer>
          {(user) => (
            <classContext.Consumer>
              {(name) => (
                <userNameContext.Consumer>
                  {(userName) => (
                    <div>
                      <h1>{user}</h1>
                      <h2>{name}</h2>
                      <h3>{userName}</h3>
                    </div>
                  )}
                </userNameContext.Consumer>
              )}
            </classContext.Consumer>
          )}
        </userContext.Consumer>
      </>
    );
  }
}

export default CompC;
