import React, { Component } from 'react';
import Content from './base/content';

export default class Home extends Component {

	render() {
		return (
			<Content className="content">
				<h1><strong>Hi, I'm Austin.</strong></h1>
				<img className="me-img" src="/assets/me.jpg" />
				<div>
					<p>I love programming.</p>
					<p>I first got a taste in middle school when I discovered the <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codeacademy course for javascript</a>. I remember being so happy learning basic web development.</p>
					<p>In high school, I joined robotics to dabble in C++ but really got into web development here. I helped work on <a href="https://atthecontrol.com" target="_blank">At The Control</a>, a streaming service for <a href="https://www.firstinspires.org/robotics/frc" target="_blank">FIRST robotics competitions</a>.</p>
					<p>I then graduated from high school and went to <a href="https://www.msoe.edu/" target="_blank">MSOE</a> to major in software engineering.</p>
					<p>This website has a few projects I've worked on as well as other fun content from me.</p>
				</div>
			</Content>
		);
	}
}
