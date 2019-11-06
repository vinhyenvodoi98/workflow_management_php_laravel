import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Background from './components/Background';
import Router from './router';

import './Root.css';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Background />
                        <Router />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Root />, document.getElementById('example'));
}
