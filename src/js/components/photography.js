import React, { Component } from 'react';

export default class Photography extends Component {

    render () {
        return (
            <div className="content">
                <h1><strong>I like taking pictures.</strong></h1>
                <ul>
                    <p>I can't see any reason for anyone contacting me other than letting me know my code on github has huge issues</p>
                    <li><a target="_blank" href="mailto:austinrovge@gmail.com">austinrovge@gmail.com</a></li>
                    <li><a target="_blank" href="https://twitter.com/austinrovge">Twitter</a></li>
                    <li>Slack - @austinrovge / austinrovge@gmail.com</li>
                </ul>
                <h3><strong>Other Links</strong></h3>
                <ul>
                    <p>These are links to other stuff that I just didn't know where to put them</p>
                    <li><a target="_blank" href="https://github.com/austinrovge">Github</a></li>
                </ul>
            </div>
        );
    }
}