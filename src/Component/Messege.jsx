import React, { Component } from 'react';




class Messege extends Component{
  constructor(){
      super()
      this.state={
          messege: 'Welcome man'
      }
  }

  changeMessage(){
      this.setState({
          messege:"THank You"
      })
  }


  render(){
  return (
      <>

  <h1>{this.state.messege} </h1>
    <button onClick = {() =>this.changeMessage() }> Subsribe</button>
  </>

  )
    
  
}

}
export default Messege;
