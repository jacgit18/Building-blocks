import React, { useState, useEffect, Component } from "react";

export class ClassCounterOneLifeCycleHooker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: "",
		};
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("Updating document title");
			document.title = `Clicked ${this.state.count} times`;
		}
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		);
	}
}

export function useEffectHookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	useEffect(() => {
		console.log("useEffect - Updating document title ");
		document.title = `You clicked ${count} times`;
	}, [count]);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	);
}
