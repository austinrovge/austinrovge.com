import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import NotFound from './components/not-found';
import '../css/main.scss'; //sass

class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));