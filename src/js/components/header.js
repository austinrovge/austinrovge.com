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
                <div className="head-text col-md-6">
                    <Link to="/"><h1>{this.state.content}</h1></Link>
                    <h6>Milwaukee, Wisconsin</h6>
                    <h6>developing innovative solutions never</h6>
                </div>
                <div className="col-md-6 links">
                    <Link to="/projects">projects</Link>
                    <Link to="/contact">contact</Link>
                </div>
            </div>
        );
    }
}