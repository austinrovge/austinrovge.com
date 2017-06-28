import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "austinrovge"
        }
    }

    render () {
        return (
            <div className="header col-sm-12 col-md-12 col-lg-12">
                <div className="header-container">
                    <Link to="/"><h1><strong>{this.state.content}</strong></h1></Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/contact">contact</Link>
                    <h6>developing innovative solutions never</h6>
                </div>
            </div>
        );
    }
}