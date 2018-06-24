import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default class Content extends Component {
    render () {

        const content = {
            padding: '0 0 100px 0',
            margin: '0 15px 0 15px',
            clear: 'none',
            overflowY: 'auto',
            width: 'calc(100% - 30px)'
        }

        return (
            <div>
                <Header pathname={this.props.location.pathname} />
                <div style={content}>
                    {this.props.content}
                </div>
                <Footer />
            </div>
        );
    }
}