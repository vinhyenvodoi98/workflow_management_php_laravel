import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/NavBar/Navbar';
import LoadingPage from './views/LoadingPage';
import ColumnNav from './components/NavBar/ColumnNav';
import RouteSwitch from './routeSwitch';
import { Animated } from 'react-animated-css';

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
          {this.props.LoginStatus.isLoading ? (
            <LoadingPage />
          ) : this.props.LoginStatus.navPositon ? (
            <Animated
              animationIn='fadeIn'
              animationOut='zoomOutDown'
              animationInDuration={1500}
              animationOutDuration={1000}
              isVisible={true}
            >
              <Navbar />
              <RouteSwitch />
            </Animated>
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
