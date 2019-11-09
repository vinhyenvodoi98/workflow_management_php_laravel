import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as loginAction from './actions/loginAction';

import Router from './router';

import './Root.css';

export default class Root extends Component {
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
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Root />, document.getElementById('example'));
}
