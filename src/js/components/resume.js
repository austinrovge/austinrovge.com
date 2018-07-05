import React, { Component } from 'react';
import Header from './base/header';
import Footer from './base/footer';

export default class Home extends Component {

    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>I like being hired.</strong></h1>
                    <p>This might not be the most up to date version of my resume, so beware! <a href="/assets/resume.pdf" target="_blank">Click here to view the PDF.</a></p>
                    <object data="/assets/resume.pdf" type="application/pdf">
                        <p>Looks like there's something wrong with the embedded PDF, <a href="/assets/resume.pdf" target="_blank">click here to view my resume!</a></p>
                    </object>
                </div>
                <Footer />
            </div>
        );
    }
}