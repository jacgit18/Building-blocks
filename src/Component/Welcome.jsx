
import React, { Component } from 'react';

export default class Welcome extends Component{
 

  render(){
    const {name, alias} = this.props;
    // similar with state 
    // const {prevState, currState} = this.state;
    
  return <h1>Welcome {name} aka {alias}</h1>
  // return <h1>Welcome {this.props.name} aka {this.props.alias}</h1>
  
    
  
}

}
 