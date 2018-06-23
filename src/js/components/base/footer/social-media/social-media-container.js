import React, { Component } from 'react';
import Github from './github'
import LinkedIn from './linkedin'
import Email from './email'
import Twitter from './twitter'
import Instagram from './instagram'

export default class SocialMediaContainer extends Component {

    render() {

        const socialMediaContainer = {
            marginTop: '10px',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-around',
            width: '250px',
            marginRight: 'auto'
        }

        return (
            <div style={socialMediaContainer}>
                <Github />
                <LinkedIn />
                <Email />
                <Twitter />
                <Instagram />
            </div>
        );
    }
}