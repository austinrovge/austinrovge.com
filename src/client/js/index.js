import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import About from './components/about'
import Photography from './components/photography'
import Projects from './components/projects'
import Resume from './components/resume'
import NotFound from './components/not-found'

render((
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={About} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/website" component={Projects} />
			<Route exact path="/photography" component={Photography} />
			<Route exact path="/resume" component={Resume} />
			<Route exact path="*" component={NotFound} />
		</Switch>
	</Router>
), document.getElementById('app'))
