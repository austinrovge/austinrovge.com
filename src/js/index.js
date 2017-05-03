import React, { Component } from 'react';
import { render } from 'react-dom'; //destructured
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import '../css/main.scss'; //sass

class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <div>
                    <Route path="/" component={Header}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));