import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="content">
                <h1>Most projects can be found on my <a target="_blank" href="https://github.com/austinrovge">Github</a></h1>
                <div className="project-div">
                    <div className="cover"></div>
                    <img src="/assets/atc-logo.png" />
                </div>
            </div>
        );
    }
}