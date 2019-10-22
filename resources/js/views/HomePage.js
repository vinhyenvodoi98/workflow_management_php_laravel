import React, { Component } from 'react';
import store from '../store';
import * as loginAction from '../actions/loginAction';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var token;
        try {
            window.addEventListener('load', () => {
                if ((token = localStorage.getItem('token')))
                    store.dispatch(loginAction.login(token));
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }
}

export default HomePage;
