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
                <Link to="/"><h1>{this.state.content}</h1></Link>
                <h6>developing innovative solutions never</h6>
                <br />
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        );
    }
}