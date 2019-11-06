import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import WorkMgmtPage from './views/WorkMgmtPage';
import GroupMgmtPage from './views/GroupMgmtPage';
import ProcessMgmtPage from './views/ProcessMgmtPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import GroupCreatePage from './views/GroupCreatePage';
import GroupListPage from './views/GroupListPage';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='content '>
                <Navbar />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={RegisterPage} />
                <Route exact path='/' component={HomePage} />
                {this.props.LoginStatus.isLogin ? (
                    <div>
                        <Route exact path='/workspage' component={WorkMgmtPage} />
                        <Route exact path='/grouppage' component={GroupMgmtPage} />
                        <Route exact path='/processpage' component={ProcessMgmtPage} />
                        <Route exact path='/groups' component={GroupListPage} />
                        <Route exact path='/groupCreate' component={GroupCreatePage} />
                    </div>
                ) : (
                    <div>{/* <Route path='*' component={HomePage} /> */}</div>
                )}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        LoginStatus: state.LoginStatus
    };
};

export default compose(connect(mapStatetoProps))(Router);
