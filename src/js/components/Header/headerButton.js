import React, { Component } from 'react';

export default class HeaderButton extends Component{
    render () {
        return (
            <h1 className="button">{ this.props.children }</h1>
        );
    }
}

export { HeaderButton as HeaderButton }