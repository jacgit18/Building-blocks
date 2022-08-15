import React, { useReducer } from 'react'
// import CounterOne from './altContext/CounterOne'
// import CounterTwo from './altContext/CounterTwo'
// import CounterThree from './altContext/CounterThree'
import ComponentA from './altContext/ComponentA'
import ComponentB from './altContext/ComponentB'
import ComponentC from './altContext/ComponentC'
// import DataFetchingOne from './altContext/DataFetchingOne'
// import DataFetchingTwo from './altContext/DataFetchingTwo'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()

export function UseReducerToUseContext() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div>
				{/* <CounterOne /> */}
				{/* <CounterTwo /> */}
				{/* <CounterThree /> */}
				{count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
				{/* <DataFetchingOne /> */}
				{/* <DataFetchingTwo /> */}
			</div>
		</CountContext.Provider>
	)
}

