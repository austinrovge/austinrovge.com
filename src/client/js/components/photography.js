import React, { Component } from 'react'
import Content from './base/content'

export default class Photography extends Component {

	render() {
		return (
			<Content className="content">
				<h1><strong>I like taking pictures.</strong></h1>
				<p>I've been busy working on other features, so there isn't much here. I'll be able to add more content soon!</p>
				<div className="photos">
					<img className="photo" src="/assets/mke.jpg" />
					<img className="photo" src="/assets/kepler.jpg" />
					<img className="photo" src="/assets/kammi.jpg" />
				</div>
			</Content>
		)
	}
}
