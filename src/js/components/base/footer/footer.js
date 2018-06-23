import React, { Component } from 'react';
import SocialMediaContainer from './social-media/social-media-container'

export default class Footer extends Component {

    render () {

        const footer = {
            backgroundColor: '#fff',
            height: '100px',
            width: '100%',
            bottom: '0',
            color: '#212121',
            marginLeft: '60px',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'left',
            left: '0'
        }

        return (
            <div style={footer}>
                <SocialMediaContainer />
            </div>
        );
    }
}