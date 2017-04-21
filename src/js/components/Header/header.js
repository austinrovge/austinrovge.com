import React, { Component } from 'react';
import HeaderButton from '../Header/headerButton';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "austinrovge"
        }
    }

    render () {
        return (
            <div className="col-12-md col-12-lg col-12-sm header">
                <HeaderButton>Dank Memes</HeaderButton>
                <h1 className="headerText">{this.state.content}</h1>
            </div>
        );
    }
}

export { Header }