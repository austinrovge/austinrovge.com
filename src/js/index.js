import React, { Component } from 'react';
import { render } from 'react-dom'; //destructured
import Header from './components/header';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import '../css/main.scss'; //sass

class Main extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <div>
                    <Route path="/" component={Header}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

render(<Main />, document.getElementById('app'));