import React, { Component } from 'react'

export default class RefsDemo extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef() // new way

		// old way
		this.cbRef = null
		this.setCbRef = element => {
			this.cbRef = element
		}
	}

	componentDidMount() {
		// this.inputRef.current.focus() // new
		// old
		console.log(this.cbRef)
		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} /> 
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

