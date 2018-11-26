import React, { Component } from 'react'
import Content from './base/content'

export default class About extends Component {

	render() {
		return (
			<Content className="content">
				<h1><strong>Hi, I'm Austin.</strong></h1>
				<img className="me-img" src="/assets/me.jpg" />
				<div>
					<p>I'm a college student who's trying to learn as much as I can about web development and programming!</p>
					<p>I first got a taste of programming in middle school when I discovered the <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codeacademy course for JavaScript</a>. I remember proudly showing my mom that I could use for loops in JavaScript!</p>
					<p>In high school, I joined robotics to program robots with C++, but I ended up switching gears and helping out with the team's web presence. I helped work on <a href="https://atthecontrol.com" target="_blank">At The Control</a>, a streaming service for <a href="https://www.firstinspires.org/robotics/frc" target="_blank">FIRST Robotics Competition</a> events.</p>
					<p>After graduating from high school, I went to the <a href="https://www.msoe.edu/" target="_blank">Milwaukee School of Engineering</a> to major in software engineering.</p>
					<p>This website has some information about me and projects I've worked on, but I mostly use it to try out new web technologies!</p>
				</div>
			</Content>
		)
	}
}
