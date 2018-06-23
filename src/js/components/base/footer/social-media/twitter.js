import React, { Component } from 'react';

export default class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = { isHovered: false };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {

        const socialBtn = {
            transitionDuration: '0.2s',
            fill: this.state.isHovered ? 'rgba(0, 0, 0, 0.5' : 'rgba(0, 0, 0, 0.3'
        }

        return (
            <a onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={socialBtn} target="_blank" href="https://twitter.com/austinrovge">
                <svg viewBox="328 355 335 276" height="32" width="32">
                    <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"/>
                </svg>
            </a>
        );
    }
}