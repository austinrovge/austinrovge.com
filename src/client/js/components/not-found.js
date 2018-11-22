import React, { Component } from 'react'
import Content from './base/content'

export default class NotFound extends Component {

	render() {
		return (
			<Content className="content">
				<h1><strong>Looks like this link doesn't exist.</strong></h1>
				<p>Hopefully you typed something in wrong and I didn't mess up!</p>
			</Content>
		)
	}
}
