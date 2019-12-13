import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/NavBar/Navbar';
import LoadingPage from './views/LoadingPage';
import ColumnNav from './components/NavBar/ColumnNav';
import RouteSwitch from './routeSwitch';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='content '>
        <Background />

        <BrowserRouter>
          {this.props.LoginStatus.navPositon ? <Navbar /> : <></>}
          {this.props.LoginStatus.isLoading ? (
            <LoadingPage />
          ) : this.props.LoginStatus.navPositon ? (
            <RouteSwitch />
          ) : (
            <ColumnNav />
          )}
        </BrowserRouter>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(Router);
