import React, { Component } from 'react';

export default class Projects extends Component {
    render () {

        const project = {
            width: '100%',
            borderRadius: '5px',
            height: '150px',
            backgroundColor: '#ECF0F1',
            padding: '2.5px 5px',
            marginBottom: '10px',
            color: '#000'
        }

        return (
            <div>
                <h1><strong>Here's stuff I've worked on</strong></h1>
                <div style={project}>
                    <a target="_blank" href="https://atthecontrol.com"><h3><strong>At The Control</strong></h3></a>
                    <p>ATC is a streaming hub for viewing <a target="_blank" href="https://firstinspires.org">First Robotics</a> competitions.
                        It was developed by <a target="_blank" href="https://team537.org">Team 537.</a> I learned most of my web skills through this project.</p>
                </div>
                <div style={project}>
                    <a target="_blank" href="https://github.com/austinrovge/website"><h3><strong>This Site</strong></h3></a>
                    <p>I created this site as I had the domain <code>austinrovge.com</code> and wanted to learn ReactJS.
                        So I began working on learning React and styling this graphic mess.</p>
                </div>
                <div style={project}>
                    <a target="_blank" href=""><h3><strong>placeholder pls ignore</strong></h3></a>
                    <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
                </div>
            </div>
        );
    }
}