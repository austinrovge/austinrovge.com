import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <div className="col-12-md col-12-lg col-12-sm header">
                <h1 className="headerText">{this.props.content}</h1>
            </div>
        );
    }
}

export {Header as Header}