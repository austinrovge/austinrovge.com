import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class Content extends Component {

	render() {
		return (
			<div>
				<Header />
				<div className="content">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}
