import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div className="content">
                <h1 className="home-text">
                    <h1>
                        <strong>Hi!</strong>
                    </h1>
                    <h3>
                        I am a mediocre programmer that mostly does web based development.<br/>
                    </h3>
                    <Link to="/about" className="about col-12-sm col-12-md col-12-lg">about
                        <h4 className="opacity-text">learn more about my boring life</h4>
                    </Link>
                    <Link to="/projects" className="projects col-12-sm col-12-md col-12-lg">projects
                        <h4 className="opacity-text">view hacked together projects</h4></Link>
                    <Link to="/contact" className="contact col-12-sm col-12-md col-12-lg">contact
                        <h4 className="opacity-text">contact me to tell me my code is garbage</h4></Link>
                </h1>
            </div>
        );
    }
}

export default Home