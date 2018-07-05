import React, { Component } from 'react';
import Header from './base/header';
import Footer from './base/footer';

export default class NotFound extends Component {

    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>Looks like this link doesn't exist.</strong></h1>
                    <p>Hopefully you typed something in wrong and I didn't mess up!</p>
                </div>
                <Footer />
            </div>
        )
    }
}