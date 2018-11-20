import React, { Component } from 'react';
import Content from '../base/content';

export default class Website extends Component {

	render () {
		return (
			<Content className="content">
				<h1><strong>This site.</strong></h1>
				<div>
					<p>This site was built using React and is running on a small raspberry pi.</p>
					<p>It's gone through many different revisions over the years and seems pretty solid now.</p>
					<a href="https://github.com/austinrovge/website-js" target="_blank">Link to github repository</a>
				</div>
			</Content>
		);
	}
}