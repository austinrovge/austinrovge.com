import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Home from './components/home';
import Content from './components/base/content'
import Photography from './components/photography';
import Projects from './components/projects';
import Contact from './components/contact';
import NotFound from './components/not-found';

render((
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" render={() => <Content content={<Home />}  />} />
            <Route exact path="/projects" render={() => <Content content={<Projects />} />} />
            <Route exact path="/photography" render={() => <Content content={<Photography />} />} />
            <Route exact path="/contact" render={() => <Content content={<Contact />} />} />
            <Route exact path="*" render={() => <Content content={<NotFound />} />} />
        </Switch>
    </Router>
), document.getElementById('app'));