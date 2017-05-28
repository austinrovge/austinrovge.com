import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div className="content">
                {this.props.match.params.projectID ? this.props.true = 1 : this.props.true = 0}
                hey this is all my projects lol
                <br/> this project's id is: {this.props.true}
            </div>
        );
    }
}