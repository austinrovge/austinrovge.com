import React, { Component } from 'react';
import Content from '../base/content';

export default class AtTheControl extends Component {

    render () {
        return (
            <Content className="content">
                <h1><strong>At The Control.</strong></h1>
                <div>
                    <p>ATC is a streaming hub for viewing <a target="_blank" href="https://firstinspires.org">First Robotics</a> competitions.</p>
                    <p>It was developed by <a target="_blank" href="https://team537.org">Team 537.</a> I learned most of my web skills through this project.</p>
                    <a href="http://atthecontrol.com" target="_blank">At The Control Link</a>
                </div>
            </Content>
        );
    }
}