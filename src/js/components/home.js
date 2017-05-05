import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div className="content">
                <img className="parallax" src="assets/stockimage.png" />
                Hi<br/>
                I am a mediocre programmer that mostly does web based development.<br/>
                I am going to throw up some BS parallax scrolling image of happy people and talk about how I develop innovative stuff now.
            </div>
        );
    }
}

export default Home