import './App.css';
// import Greet  from './Component/Greet'; // with default
import {Greet}  from './Component/Greet'; // no default
import Welcome from './Component/Welcome';
import Messege from './Component/Messege';
import Counter from './Component/Counter';
import {FunctionClck, Classclck} from './Component/FunctionClck';


import React, { Component } from 'react';




class App extends Component{
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <>
      {/* <Counter /> 

      <Greet name="josh" alias="batman"/>

      <Greet name="jack" alias="Homelander"> 
      <p> static Child tag</p>
      </Greet>

        <Welcome name="jimmy" alias="Black-noir"> 
        <p> static Child tag</p>

        </Welcome>


      <Messege/> */}

      {/* Event Handling */}
      <FunctionClck />
      <Classclck />



      </>
      </header>
    </div>
  );
}

}
export default App;
