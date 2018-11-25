import React, { Component } from 'react'
import GitHub from './icons/github'
import LinkedIn from './icons/linkedin'
import Email from './icons/email'
import Instagram from './icons/instagram'
import Spotify from './icons/spotify'

export default class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<GitHub />
				<LinkedIn />
				<Email />
				<Instagram />
				<Spotify />
			</div>
		)
	}
}
