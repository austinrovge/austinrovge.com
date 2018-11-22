import React, { Component } from 'react';
import Github from './social-media/github'
import LinkedIn from './social-media/linkedin'
import Email from './social-media/email'
import Twitter from './social-media/twitter'
import Instagram from './social-media/instagram'

export default class Footer extends Component {

	render() {
		return (
			<div className="footer">
				<Github />
				<LinkedIn />
				<Email />
				<Twitter />
				<Instagram />
			</div>
		);
	}
}
