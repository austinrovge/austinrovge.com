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
            <div className="header 12-col-sm 12-col-md 12-col-lg">
                <div className="head-text">
                    <Link to="/"><h1>{this.state.content}</h1></Link>
                    <h6>Milwaukee, Wisconsin</h6>
                    <h6>developing innovative solutions never</h6>
                </div>
                <Link to="/contact">contact</Link>
                <Link to="/projects">projects</Link>
            </div>
        );
    }
}