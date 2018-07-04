import React, { Component } from 'react';
import Header from './base/header';
import Footer from './base/footer';

export default class Projects extends Component {

    render () {
        return (
            <div>
                <Header />
                    <div className="content">
                        <h1><strong>Here's some stuff I've worked on.</strong></h1>
                        <div className="project-div">
                            <img height="32" src="/assets/atc.png" />
                            <a target="_blank" href="https://atthecontrol.com"><h3><strong>At The Control</strong></h3></a>
                            <p>ATC is a streaming hub for viewing <a target="_blank" href="https://firstinspires.org">First Robotics</a> competitions.
                                It was developed by <a target="_blank" href="https://team537.org">Team 537.</a> I learned most of my web skills through this project.</p>
                        </div>
                        <div className="project-div">
                            <a target="_blank" href="https://github.com/austinrovge/website"><h3><strong>This Site</strong></h3></a>
                            <p>I created this site as I had the domain <code>austinrovge.com</code> and wanted to learn ReactJS.
                                So I began working on learning React and styling this graphic mess.</p>
                        </div>
                        <div className="project-div">
                            <a target="_blank" href=""><h3><strong>placeholder pls ignore</strong></h3></a>
                            <p>REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}