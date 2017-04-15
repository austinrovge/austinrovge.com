import React, { Component } from 'react'; //destructed for line 6
import ReactDOM, { render } from 'react-dom';
import Header from './components/header.js'
import '../css/main.scss'; //required to have sass compile

class Main extends Component { //or React.Component
    render () {
        return (
            <div>
                <Header />
                <img src="http://wallpapercave.com/wp/xTkHBfj.jpg" />
                <Header />
            </div>
        );
    }
}

render(<Main />, document.getElementById('app')); //or ReactDOM.render