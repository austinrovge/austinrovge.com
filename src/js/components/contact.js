import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class Contact extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="content">
                    <h1><strong>Here's how to reach me</strong></h1>
                    <ul>
                        <li><a target="_blank" href="mailto:austinrovge@gmail.com">austinrovge@gmail.com</a></li>
                        <li><a target="_blank" href="https://twitter.com/austinrovge">Twitter</a></li>
                    </ul>
                    <h1><strong>Other</strong></h1>
                    <ul>
                        <li><a target="_blank" href="https://github.com/austinrovge">Github</a></li>
                        <li><a target="_blank" href="/assets/resume.pdf">Resume</a></li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

//todo download social icons to be locally stored