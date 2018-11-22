import React, { Component } from 'react';
import Content from './base/content';

export default class Projects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		fetch('/api/getAllProjects')
			.then(response => response.json())
			.then(data => this.setState({ projects: data }))
	}

	render() {
		return (
			<Content className="content">
				<h1><strong>Here's some stuff I've worked on.</strong></h1>
				<p>This page pulls my public projects from Github. I also have some other projects that aren't listed on here!</p>
				<div className="projects">
					{this.state.projects.map((project, i) => {
						return (
							<div className="project" key={i}>
								<a href={project.html_url}>
									{project.name}
								</a>
								<p className={`project-lang ${project.language.toLowerCase().replace('#', 'sharp').replace('+', 'plus')}`}>{project.language}<span /></p>
								<p>{project.description}</p>
							</div>
						)
					})}
				</div>
			</Content>
		)
	}
}
