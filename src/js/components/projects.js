import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="content">
                {/*{this.props.match.params.projectID ? this.props.true = 1 : this.props.true = 0}*/}
                {/*hey this is all my projects lol*/}
                {/*<br/> this project's id is: {this.props.true}*/}
                <h1>Visit <a href="https://github.com/austinrovge">my github</a> to see all my open source projects!</h1>
                <div className="text-block">All of my projects can be found here</div>
                <div className="text-block">All. Of them.</div>
            </div>
        );
    }
}