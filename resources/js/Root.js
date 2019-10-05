import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {  } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import WorkMgmtPage from './views/WorkMgmtPage';
import GroupMgmtPage from './views/GroupMgmtPage';
import ProcessMgmtPage from './views/ProcessMgmtPage';

import './Root.css';

export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Background />
                    <div className='content container'>
                        <Navbar />

                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/workspage' component={WorkMgmtPage} />
                        <Route exact path='/grouppage' component={GroupMgmtPage} />
                        <Route exact path='/processpage' component={ProcessMgmtPage} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Root />, document.getElementById('example'));
}
