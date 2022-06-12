import React, { Component } from 'react'

 class Counter extends Component {
   constructor(props){
     super(props)

     this.state = {
      count: 0
     }
   }

   changeCount(){
     //this.state.count = this.state.count +1; // the only place to assign state is the constructor otherwise state wont render
     // a better way is using setState() which takes in updated state and callback
    // this.setState({
    //   count: this.state.count + 1
    // },
    // () =>{console.log(`Callback Val ${this.state.count}` )}) // when at 1 this.state will console log 0 
    
    // because calls to setstate are aysnc 
    // so you will always be 1 behind or on the previous state in term of state initial value

    // console.log(this.state.count) // this called before state is sent so in order to get a accurate state
    // you need to pass a callback in to setState if you need to do things after setting state do it in callback

    // proper way to set state use previous state
    this.setState( (prevState, props) => ({
      count: prevState.count + 1
    }), ()=>{ console.log(`Callback Val ${this.state.count}`) })

    console.log(this.state.count)



   }


   changeCount2(){
    
    this.setState( (prevState, props) => ({
      count: prevState.count + 1
    }), ()=>{ console.log(`Callback Val ${this.state.count}`) })

    console.log(this.state.count)
  }

  changeCount3(){
    
    this.setState( (prevState, props) => ({
      count: prevState.count + 1
    }), ()=>{ console.log(`Callback Val ${this.state.count}`) })

    console.log(this.state.count)
  }

  changeCount4(){
    
    this.setState( (prevState, props) => ({
      count: prevState.count + 1
    }), ()=>{ console.log(`Callback Val ${this.state.count}`) })

    console.log(this.state.count)
  }

  changeCount5(){
    
    this.setState( (prevState, props) => ({
      count: prevState.count + 1
    }), ()=>{ console.log(`Callback Val ${this.state.count}`) })

    console.log(this.state.count)
  }



   multiStateChange(){

    // wont work the way you expect because the way react state works
    // react will group multiple setStates into one for optimization 
    // but since that is the case the updated value isnt carried over
    // so when pressed all will be zero and state total will be 1 then all will be 1 then state total is 2
    this.changeCount()
    this.changeCount()
    this.changeCount()

    // similar result with diff methods
    // similar result with prev state methods increment count to 7 intial then 14 then 21
    this.changeCount2()
    this.changeCount3()
    this.changeCount4()
    this.changeCount5()

   }

  

  render() {
    return (
      <>
        <>Count - {this.state.count}</>
        <button onClick = {() =>this.changeCount() }> Increment</button>
        {/* <button onClick = {() =>this.multiStateChange() }> Increment</button> */}
        {this.props.render(this.state.count, this.incrementCount)}
      </>
    )
  }
}

export default Counter