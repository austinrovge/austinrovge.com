import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render () {
        return (
            <div className="content">please contact me my mom says i <strong>need</strong> friends. please.

                also here is my email austinrovge@gmail.com todo: setup smtp server
                and i will probably throw my resume up here at some point because im a fag
                <Link to="https://github.com/austinrovge"><img className="social-btn" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" /></Link>
            </div>
        );
    }
}

//todo download social icons to be locally stored

export default Contact