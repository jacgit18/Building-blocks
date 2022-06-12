import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'



export default class ComponentE extends Component {

	static contextType = UserContext

	render() {
		return (
			<div>
			Component E context {this.context}
				<ComponentF />
			</div>
		)
	}
}

// only works with class and only can subscribe to one context type
// ComponentE.contextType = UserContext; //alt way
