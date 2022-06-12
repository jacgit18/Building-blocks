import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

