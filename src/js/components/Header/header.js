import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderButton from '../Header/headerButton';

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
                <h1 className="text">austinrovge</h1>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export { Header }