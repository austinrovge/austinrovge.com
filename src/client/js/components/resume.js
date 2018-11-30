import React, { Component } from 'react'
import Content from './base/content'

export default class Home extends Component {

	render() {
		return (
			<Content className="content">
				<h1><strong>I'm working hard to learn new skills.</strong></h1>
				<p>This might not be the most up to date version of my resume, so beware! <a href="/assets/resume.pdf" target="_blank">Click here to view the PDF.</a></p>
				<object data="/assets/resume.pdf" type="application/pdf">
					<p>Looks like there's something wrong with the embedded PDF, <a href="/assets/resume.pdf" target="_blank">click here to view my resume!</a></p>
				</object>
			</Content>
		)
	}
}
