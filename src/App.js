import "./App.css";
import styles from './appStyles.module.css';

// import Greet  from './Component/Greet'; // with default
// import { Greet } from "./Component/Greet"; // no default
// import Welcome from "./Component/Welcome";
// import Messege from "./Component/Messege";
// import Counter from "./Component/Counter";
// import { FunctionClck, Classclck } from "./Component/FunctionClck";
// import EventBind from "./Component/EventBind";
// import ParentComponent from "./Component/ParentComponent";
// import UserGreeting from "./Component/UserGreeting";
// import NameList from "./Component/NameList";
// import Form from "./Component/Form";
// import ParentComp from "./Component/ParentComp";
// import LifecycleA from "./Component/LifecycleA";
// import RefsDemo from "./Component/RefsDemo";
// import FocusInput from './Component/FocusInput';
// import GetList from './Component/GetList';
// import PostForm from './Component/PostForm';
// import FRParentInput from './Component/FRParentInput';
// import Stylesheet from "./Component/Stylesheet";
// import {Inline} from "./Component/Inline";
// import PortalDemo from "./Component/PortalDemo";
import Hero from "./Component/Hero";
import ErrorBoundary from "./Component/ErrorBoundary";
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import ClickCounterTwo from './Component/ClickCounterTwo'
import HoverCounterTwo from './Component/HoverCounterTwo'
import ComponentC from './Component/ComponentC'
import { UserProvider } from './Component/userContext'

import CounterTwo from "./Component/CounterTwo";


import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <>
            {/* 
            <Counter /> 

      <Greet name="josh" alias="batman"/>

      <Greet name="jack" alias="Homelander"> 
      <p> static Child tag</p>
      </Greet>

        <Welcome name="jimmy" alias="Black-noir"> 
        <p> static Child tag</p>

        </Welcome>


      <Messege/> */}

            {/* Event Handling */}
            {/* <FunctionClck />
      <Classclck /> */}

            {/* <EventBind /> */}
            {/* 
            <ParentComponent />
            <UserGreeting /> */}
            {/* <NameList /> */}
            {/* <Form /> */}
            {/* <LifecycleA /> */}
            {/* <ParentComp /> */}
            {/* <RefsDemo /> */}
            {/* <FocusInput /> */}
            {/* <FRParentInput /> */}


            
            {/* <PostForm /> */}
				   {/* <GetList /> */}
           {/* <Stylesheet primary={true}  />
           <Inline  />
            <h1 className="error"> error </h1>
            <h1 className={styles.success}> succ </h1> */}
            {/* <PortalDemo  /> */}
            
            {/* better to do espisically if your on a website like amazon
            and you have a lot products you dont wont to lose access to the whole pg
             but can be more dynamic just an example to get an idea of the context */}
            {/* <ErrorBoundary>
            <Hero heroName="Batman" />
            </ErrorBoundary>


            <ErrorBoundary>
            <Hero heroName="Joker" />
            </ErrorBoundary> */}

           
            {/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter> */}
        

            {/* <Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter> */}


        {/* props will be sent to withcounter higherOrder func not ClickCounter  */}
			 {/* <ClickCounter name='josh' /> 
				 <HoverCounter />  */}
          
         {/* render prop pattern  */}


         {/* <CounterTwo render = {(count,incrementCount) =>(
          <ClickCounterTwo count={count}
						incrementCount={incrementCount}

            />
            )} />

<CounterTwo render = {(count,incrementCount) =>(
          <HoverCounterTwo count={count}
						incrementCount={incrementCount}

            />
            )} /> */}


<CounterTwo>
        {(count, incrementCount) =>(
          <ClickCounterTwo count={count}
						incrementCount={incrementCount}

            />
            )}

         </CounterTwo>


         <CounterTwo>
        {(count, incrementCount) =>(
          <HoverCounterTwo count={count}
						incrementCount={incrementCount}

            />
            )}

         </CounterTwo>






          {/* <CounterTwo>

          </CounterTwo> */}
         {/* <ClickCounterTwo/> 
				 <HoverCounterTwo />  */}


      {/* context Api */}
      {/* create provide consume context  */}
         
          <UserProvider value="josh">
          <ComponentC/>


          </UserProvider>


          </>
        </header>
      </div>
    );
  }
}
export default App;
