import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class NotFound extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>404 Not Found :(</strong></h1>
                </div>
                <Footer />
            </div>
        )
    }
}