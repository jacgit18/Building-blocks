// rcc creates class
// rfce creates function

import React, {Component} from 'react'

export function FunctionClck() {

  function clickHandler(){
    console.log("Clicked Func ")
  }

  return (
    <> 
    
    <button onClick = {clickHandler}> Click</button>

    </>
  )
}


export class Classclck extends Component {
   clickHandler(){
    console.log("Clicked Class")
  }

  render() {
    return (
      <>
          <button onClick = {this.clickHandler}> Click me</button>

      </>
    )
  }
}
