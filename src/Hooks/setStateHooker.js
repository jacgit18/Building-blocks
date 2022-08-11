import React, { useState, Component } from "react";

export class ClassCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.incrementCount}>Count {this.state.count}</button>
			</div>
		);
	}
}

export class ClassCounterTwo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.incrementCount}>Count {this.state.count}</button>
			</div>
		);
	}
}

export function HookCounter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
}

export function HookCounterTwo() {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	);
}

export function HookCounterThree() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={(e) => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={(e) => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	);
}

export function HookCounterFour() {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
			},
		]);
	};

	console.log(items);

	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
}
