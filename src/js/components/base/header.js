import React, { Component } from 'react';
import Links from './links';

export default class Header extends Component {

    render () {
        return (
            <div className="header col-sm-12 col-md-12 col-lg-12">
                <div className="header-container">
                    <Links pathname={this.props.pathname} />
                    <h6>developing innovative solutions never</h6>
                </div>
            </div>
        );
    }
}