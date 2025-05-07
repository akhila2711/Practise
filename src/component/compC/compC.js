import React, { Component } from "react";
import { userContext,classContext} from "../../App";

class CompC extends Component {
  render() {
    return (
      
      <userContext.Consumer>
        {
          user =>{
            return (
              <classContext.Consumer>
                {
                  className => {
                    return (
                      <div>{user} and {className}</div>
                    );
                        
                    
                  }
                }
              </classContext.Consumer>
            )
          }
        }
      </userContext.Consumer>
      
    )
  }
}

export default CompC;
