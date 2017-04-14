import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import '../css/main.scss'; //required to have sass compile

class Main extends React.Component {
    render () {
        return (
            <div>
                <Header content="hello welcome to my site" />
                <img src="http://wallpapercave.com/wp/xTkHBfj.jpg" />
                <Header content="goodbye" />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));