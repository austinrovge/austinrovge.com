import React, { Component } from 'react'; //destructed for line 6
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header/header';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import Space from './components/Space';
import '../css/main.scss'; //required to have sass compile


//todo change paths to work on server and not just on this computer
class Main extends Component { //or React.Component
    render () {
        return (
            <Router history={browserHistory}>
                <div>
                    <Header />
                    <Link to="./space">
                        <button>go to space!</button>
                    </Link>
                    <Route path="file:///Users/austinrovge/WebstormProjects/website/src/space" component={Space} />
                    <Route exact={true} path="file:///Users/austinrovge/WebstormProjects/website/src/index.html" render={() => (
                        <h1>hey and whats up</h1>
                    )} />

                </div>
            </Router>
        );
    }
}

render(<Main />, document.getElementById('app')); //or ReactDOM.render