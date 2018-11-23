import React, { Component } from 'react'
import GitHub from './social-media/github'
import LinkedIn from './social-media/linkedin'
import Email from './social-media/email'
import Instagram from './social-media/instagram'
import Spotify from './social-media/spotify'

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
