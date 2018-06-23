import React, { Component } from 'react';
import Links from './links';

export default class Header extends Component {

    render () {

        const header = {
            height: '250px',
            backgroundColor: 'rgba(52, 73, 94, 1)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            textAlign: 'center'
        }

        const headerContainer = {
            display: 'block',
            fontSize: '1em'
        }

        const h6 = {
            color: '#fff',
            fontStyle: 'italic'
        }

        return (
            <div style={header}>
                <div style={headerContainer}>
                    <strong><h1>austin rovge</h1></strong>
                    <Links pathname={this.props.pathname} />
                    <h6 style={h6}>developing innovative solutions never</h6>
                </div>
            </div>
        );
    }
}