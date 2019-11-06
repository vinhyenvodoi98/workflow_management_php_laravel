import React from 'react';
import { Route } from 'react-router-dom';
import store from './store';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import WorkMgmtPage from './views/WorkMgmtPage';
import GroupMgmtPage from './views/GroupMgmtPage';
import ProcessMgmtPage from './views/ProcessMgmtPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import GroupCreatePage from './views/GroupCreatePage';
import GroupListPage from './views/GroupListPage';

function Router() {
    var state = store.getState();
    return (
        <div className='content '>
            <Navbar />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/' component={HomePage} />
            {state.LoginStatus.isLogin ? (
                <div>
                    <Route exact path='/workspage' component={WorkMgmtPage} />
                    <Route exact path='/grouppage' component={GroupMgmtPage} />
                    <Route exact path='/processpage' component={ProcessMgmtPage} />
                    <Route exact path='/groups' component={GroupListPage} />
                    <Route exact path='/groupCreate' component={GroupCreatePage} />
                </div>
            ) : (
                <div></div>
            )}
            <Route path='*' exact={true} component={HomePage} />
        </div>
    );
}

export default Router;
