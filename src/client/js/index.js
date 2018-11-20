import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import Home from './components/home';
import Photography from './components/photography';
import Projects from './components/projects/projects';
import AtTheControl from './components/projects/atthecontrol';
import Website from './components/projects/website';
import Resume from './components/resume';
import NotFound from './components/not-found';

render((
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/atthecontrol" component={AtTheControl} />
            <Route exact path="/projects/website" component={Website} />
            <Route exact path="/website" component={Projects} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    </Router>
), document.getElementById('app'));