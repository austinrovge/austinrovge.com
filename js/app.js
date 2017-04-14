import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/main.scss';

class Test extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));