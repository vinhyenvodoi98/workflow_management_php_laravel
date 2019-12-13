import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import WorkMgmtPage from './views/WorkMgmtPage';
import GroupMgmtPage from './views/GroupMgmtPage';
import ProcessMgmtPage from './views/ProcessMgmtPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import GroupCreatePage from './views/GroupCreatePage';
import GroupListPage from './views/GroupListPage';
import Page404 from './views/Page404';
import ShowListProcessPage from './views/ShowListProcessPage';
import SampleToDoPage from './views/SampleToDoPage';
import CreateToDoPage from './views/CreateTodoPage';
import CorporatePage from './views/CorporatePage';
import ListToDoPage from './views/ListToDoPage';
import KPIPage from './views/KPIPage';
import CalendarPage from './views/CalendarPage';

class RouteSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/' component={HomePage} />
        {this.props.LoginStatus.isLogin ? (
          <Switch>
            <Route exact path='/workspage' component={WorkMgmtPage} />
            <Route exact path='/grouppage' component={GroupMgmtPage} />
            <Route exact path='/listToDo' component={ListToDoPage} />
            <Route exact path='/createToDo' component={CreateToDoPage} />
            <Route exact path='/sampleToDo' component={SampleToDoPage} />
            <Route exact path='/processes' component={ShowListProcessPage} />
            <Route exact path='/processpage' component={ProcessMgmtPage} />
            <Route exact path='/groups' component={GroupListPage} />
            <Route exact path='/groupCreate' component={GroupCreatePage} />
            <Route exact path='/schedule' component={CalendarPage} />
            <Route exact path='/corporate' component={CorporatePage} />
            <Route exact path='/KPI' component={KPIPage} />
            <Route path='*' exact={true} component={Page404} />
          </Switch>
        ) : (
          ''
        )}
        <Route path='*' exact={true} component={Page404} />
      </Switch>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(RouteSwitch);
