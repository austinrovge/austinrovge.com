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
                        <a href="https://atthecontrol.com" target="_blank">
                            <h3>At The Control</h3>
                            <img className="project" src="/assets/atc.png" />
                        </a>
                        <a href="https://github.com/austinrovge/website-js" target="_blank">
                            <h3>This site</h3>
                            <img className="project-div" src="" />
                        </a>
                    </div>
                <Footer />
            </div>
        );
    }
}