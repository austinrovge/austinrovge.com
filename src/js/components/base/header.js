import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render () {
        return (
            <div className="header">
                <h1>Austin Rovge</h1>
                <div className="link-container">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    {/*<Link to="/photography">Photography</Link>*/}
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        );
    }
}