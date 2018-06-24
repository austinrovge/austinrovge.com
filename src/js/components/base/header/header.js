import React, { Component } from 'react';
import Links from './links';

export default class Header extends Component {

    render () {

        return (
            <div className="header">
                <div className="header-container">
                    <strong><h1>austin rovge</h1></strong>
                    <Links pathname={this.props.pathname} />
                    <h6>developing innovative solutions never</h6>
                </div>
            </div>
        );
    }
}