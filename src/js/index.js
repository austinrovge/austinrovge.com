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
                <div>
                    <Header />
                    <Link to="./space">
                        <button>go to space!</button>
                    </Link>
                    <Route path="/space" component={Space} />
                    <Route exact={true} path="/" render={() => (
                        <h1>hey and whats up</h1>
                    )} />

                </div>
            </Router>
        );
    }
}

render(<Main />, document.getElementById('app'));