import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Home from './components/home';
import Photography from './components/photography';
import Projects from './components/projects';
import Contact from './components/contact';
import NotFound from './components/not-found';

render((
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('app'));