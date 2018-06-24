import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

export default class Content extends Component {

    render () {
        return (
            <div>
                <Header pathname={this.props.location.pathname} />
                <div className="content">
                    {this.props.content}
                </div>
                <Footer />
            </div>
        );
    }
}