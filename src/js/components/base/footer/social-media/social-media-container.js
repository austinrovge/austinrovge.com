import React, { Component } from 'react';
import Github from './github'
import LinkedIn from './linkedin'
import Email from './email'
import Twitter from './twitter'
import Instagram from './instagram'

export default class SocialMediaContainer extends Component {

    render() {

        return (
            <div className="social-media-container">
                <Github />
                <LinkedIn />
                <Email />
                <Twitter />
                <Instagram />
            </div>
        );
    }
}