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
                        <div className="projects">

                            <div className="project">
                                <a href="https://atthecontrol.com" target="_blank">
                                    <h3>At The Control</h3>
                                    <img className="project" src="/assets/first.png" />
                                </a>
                            </div>

                            <div className="project">
                                <a href="https://github.com/austinrovge/website-js" target="_blank">
                                    <h3>This site</h3>
                                    <img className="project" src="/assets/austinrovge.me.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}