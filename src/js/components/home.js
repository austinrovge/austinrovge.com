import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div className="content">
                <h1 className="home-text">
                    <h1><strong>Hi!</strong></h1><br/><br/>
                    <h3>
                        I am a mediocre programmer that mostly does web based development.<br/><br/>
                        You can view my projects here
                    </h3>
                    <Link to="/projects">
                        <div className="projects-div col-12-sm col-12-md col-12-lg">
                            projects
                        </div>
                    </Link>
                </h1>
            </div>
        );
    }
}

export default Home