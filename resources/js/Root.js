import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import WorkMgmtPage from './views/WorkMgmtPage';
import GroupMgmtPage from './views/GroupMgmtPage';
import ProcessMgmtPage from './views/ProcessMgmtPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

import './Root.css';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Background />
                        <div className='content container'>
                            <Navbar />

                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/workspage' component={WorkMgmtPage} />
                            <Route exact path='/grouppage' component={GroupMgmtPage} />
                            <Route exact path='/processpage' component={ProcessMgmtPage} />
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/register' component={RegisterPage} />
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Root />, document.getElementById('example'));
}
