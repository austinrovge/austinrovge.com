import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from '../base/content';

export default class Projects extends Component {

    render () {
        return (
            <Content className="content">
                <h1><strong>Here's some stuff I've worked on.</strong></h1>
                <div className="projects">

                    <div className="project">
                        <Link to="/projects/atthecontrol">
                            <h3>At The Control</h3>
                            <img className="project" src="/assets/first.png" />
                        </Link>
                    </div>

                    <div className="project">
                        <Link to="/projects/website">
                            <h3>This site</h3>
                            <img className="project" src="/assets/austinrovge.me.png" />
                        </Link>
                    </div>
                </div>
            </Content>
        );
    }
}