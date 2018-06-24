import React, { Component } from 'react';
import SocialMediaContainer from './social-media/social-media-container'

export default class Footer extends Component {

    render () {

        return (
            <div className="footer">
                <SocialMediaContainer />
            </div>
        );
    }
}