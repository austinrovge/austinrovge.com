import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from './base/content';

export default class Projects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		fetch('/api/getAllProjects')
			.then(response => response.json())
			.then(data => this.setState({ data: data }))
	}

	render() {
		return (
			<Content className="content">
				<h1><strong>Here's some stuff I've worked on.</strong></h1>
				<div className="projects">
					{
						this.state.data === null ?
							'nothing'
							:
							this.state.data.map((project, i) => {
								return (
									<div className="project" key={i}>
										<h1>{project.name}</h1>
									</div>
								)
							})

					}
				</div>
			</Content>
		)
	}
}
