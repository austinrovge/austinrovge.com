import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
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
                    <Route path="/" component={Header} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/projects" component={Projects}>
                        <Route path="/projects/projectID" component={Projects} />
                    </Route>
                    <Route path="/" component={Footer} />

                    {/*<Route exact path="*" component={NotFound} />*/}
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));