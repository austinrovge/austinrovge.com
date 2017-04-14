import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/main.scss'; //required to have sass compile

class Test extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h3>Goodbye, World...</h3>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));