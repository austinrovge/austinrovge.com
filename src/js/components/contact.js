import React, { Component } from 'react';
import Header from './base/header';
import Footer from './base/footer';

export default class Contact extends Component {

    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>Like what you see?</strong></h1>
                    <p>I have my contact information linked in the footer of each page in case you want to chat!</p>
                </div>
                <Footer />
            </div>
        );
    }
}