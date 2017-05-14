import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "austinrovge"
        }
    }

    render () {
        return (
            <div className="header 12-col-sm 12-col-md 12-col-lg">
                <Link to="/"><h1>austinrovge</h1></Link>
                <h6>developing innovative solutions never</h6>
            </div>
        );
    }
}

export default Header