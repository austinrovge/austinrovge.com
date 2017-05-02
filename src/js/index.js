import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'; //destructured
import Header from './components/Header/header';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import Space from './components/Space';
import '../css/main.scss'; //sass

class Main extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <Route path="/" exact={true} render{() => (
                    <h1>Hey guys, this is my home page</h1>
                )} />
                
            </Router>
        );
    }
}

render(<Main />, document.getElementById('app'));