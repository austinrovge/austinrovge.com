import React, { Component } from 'react';
import Header from './base/header';
import Footer from './base/footer';

export default class Photography extends Component {

    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>I like taking pictures.</strong></h1>
                    <p>This section will have more soon!</p>
                </div>
                <Footer />
            </div>
        );
    }
}