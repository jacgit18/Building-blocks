import "./App.css";
import styles from "./appStyles.module.css";
import Stylesheet from "./Component/Stylesheet";
import { Inline } from "./Component/Inline";

import ClickCounter from "./Component/ClickCounter";
import ClickCounterTwo from "./Component/ClickCounterTwo";
import ComponentC from "./Component/ComponentC";
import Counter from "./Component/Counter";
import CountPropRender from "./Component/CountPropRender";

import EventBind from "./Component/EventBind";
import ErrorBoundary from "./Component/ErrorBoundary";
import FocusInput from "./Component/FocusInput";
import FRParentInput from "./Component/FRParentInput";
import { FunctionClck, Classclck } from "./Component/FunctionClck";
import { FuctionalComp } from "./Component/FuctionalComp"; // no default export if default rm brackets on import
import Hero from "./Component/Hero";
import HoverCounter from "./Component/HoverCounter";
import HoverCounterTwo from "./Component/HoverCounterTwo";
import LifecycleA from "./Component/LifecycleA";
import StateMessegeRender from "./Component/StateMessegeRender";
import StateLift from "./Component/StateLift";

import NameList from "./Component/NameList";
import ParentComponent from "./Component/ParentComponent";
import PureRegComp from "./Component/PureRegComp";
import PortalDemo from "./Component/PortalDemo";
import RefsDemo from "./Component/RefsDemo";
import UserGreeting from "./Component/UserGreeting";
import UserContext, { UserProvider } from "./Component/userContext";
import ClasComp from "./Component/ClasComp";
import GetList from "./Component/GetList";
import PostForm from "./Component/PostForm";
import React, { Component } from "react";
import {
	HookCounter,
	HookCounterTwo,
	HookCounterThree,
	HookCounterFour,
} from "./Hooks/setStateHooker";

import {
	ClassCounterOneLifeCycleHooker,
	UseEffectHookCounterOne,
  ClassMouse,
	HookMouse,
  MouseContainer,
  IntervalClassCounter,
  IntervalHookCounter,
  DataFetching
} from "./Hooks/effectHooker";
import {ContextHooker} from "./Hooks/useContext.js";
import {UseReducerToUseContext} from "./Hooks/reducerWithUseContext.js";
import {UseCallbackHooker} from "./Hooks/useCallbackHooker.js";
import {useMemoCounter} from "./Hooks/useMemo.js";


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<>
						{/* <FuctionalComp name="jack" alias="Homelander">
							<p> static Child tag</p>
						</FuctionalComp>

						<ClasComp name="jimmy" alias="Black-noir" />
						<StateMessegeRender />
						<StateLift /> */}

						{/* <Stylesheet primary={true} />
            <Inline />
            <h1 className="error"> error </h1>
            <h1 className={styles.success}> succ </h1> */}

						{/* Event Handling*/}
						{/* <FunctionClck />
            <Classclck />
            <Counter />
            <EventBind /> 
            <RefsDemo />
            <FocusInput />
            <FRParentInput />

            */}

						{/* pass func to prop */}
						{/* <ParentComponent /> */}

						{/* <PureRegComp /> */}

						{/* order of execution */}
						{/* <LifecycleA /> */}

						{/* Conditional render */}
						{/* <UserGreeting /> */}

						{/* <NameList /> */}

						{/* network req */}
						{/* <PostForm /> */}
						{/* <GetList /> */}

						{/* <PortalDemo /> */}

						{/* better to do espisically if your on a website like amazon
            and you have a lot products you dont wont to lose access to the whole pg
             but can be more dynamic just an example to get an idea of the context */}
						{/* <ErrorBoundary>
							<Hero heroName="Batman" />
						</ErrorBoundary>

						<ErrorBoundary>
							<Hero heroName="Joker" />
						</ErrorBoundary> */}

						{/* context Api - create > provide > consume > context  */}

						{/* <UserProvider value="josh">
							<ComponentC />
						</UserProvider> */}

						{/* props will be sent to withcounter higherOrder func not ClickCounter  */}
						{/* <ClickCounter name="josh" />
						<HoverCounter /> */}

						{/* render prop pattern uncomment render in clickCountTwo to enable */}
						{/* <CountPropRender>
							{(count, incrementCount) => (
								<ClickCounterTwo
									count={count}
									incrementCount={incrementCount}
								/>
							)}
						</CountPropRender>

						<CountPropRender>
							{(count, incrementCount) => (
								<HoverCounterTwo
									count={count}
									incrementCount={incrementCount}
								/>
							)}
						</CountPropRender> */}

						{/* <CountPropRender
              render={(count, incrementCount) => (
                <ClickCounterTwo
                  count={count}
                  incrementCount={incrementCount}
                />
              )}
            />

            <CountPropRender
              render={(count, incrementCount) => (
                <HoverCounterTwo
                  count={count}
                  incrementCount={incrementCount}
                />
              )}
            /> */}

            {/* // HOOKS */}

						 {/* <HookCounter />
						<HookCounterTwo />
						<HookCounterThree /> 
						<HookCounterFour /> */}


						{/* <ClassCounterOneLifeCycleHooker />
						<UseEffectHookCounterOne /> */}
            {/* <ClassMouse /> */}
            {/* <HookMouse /> */}
            {/* <MouseContainer />
            <IntervalClassCounter /> */}
            {/* <IntervalHookCounter /> */}

            {/* <DataFetching />  */}
           {/* <ContextHooker /> */}

            <UseReducerToUseContext />
            <UseCallbackHooker />
            <useMemoCounter />

					</>
				</header>
			</div>
		);
	}
}
export default App;
