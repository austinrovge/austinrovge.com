import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
    render () {
        if (this.props.pathname === '/') {
            var homeLink = (<Link to="/"><h1 className="active-link"><strong>austinrovge</strong></h1></Link>);
            var projectLink = (<Link to="/projects">projects</Link>);
            var contactLink = (<Link to="/contact">contact</Link>);
        } else if (this.props.pathname === '/projects') {
            var homeLink = (<Link to="/"><h1><strong>austinrovge</strong></h1></Link>);
            var projectLink = (<Link to="/projects" className="active-link">projects</Link>);
            var contactLink = (<Link to="/contact">contact</Link>);
        } else if (this.props.pathname === '/contact') {
            var homeLink = (<Link to="/"><h1><strong>austinrovge</strong></h1></Link>);
            var projectLink = (<Link to="/projects">projects</Link>);
            var contactLink = (<Link to="/contact" className="active-link">contact</Link>);
        }

        return (
            <div>
                {homeLink}
                {projectLink}
                {contactLink}
            </div>
        );
    }
}