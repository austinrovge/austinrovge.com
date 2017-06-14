import React, { Component } from 'react';

export default class Home extends Component {
    render () {
        return (
                <div className="content">
                    <div className="text col-md-8">
                        <strong><h3>Hi! My name is Austin!</h3></strong>
                        <h3>I am used to doing web development but I am currently on the way to receiving my BS in Software Engineering from MSOE.</h3>
                    </div>
                    <img className="home-img col-md-4" src="/assets/austin.jpg" />
                </div>
        );
    }
}