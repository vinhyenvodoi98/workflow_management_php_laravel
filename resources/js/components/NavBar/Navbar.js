import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from '../../store';
import * as loginAction from '../../actions/loginAction';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {}

  logout() {
    store.dispatch(loginAction.logout());
  }

  render() {
    return (
      <div className='col'>
        <div className='nav row'>
          <div className='col-9'>
            <div className='left'>
              {/* <HashRouter> */}
              {this.props.LoginStatus.isLogin ? (
                <ul className='row'>
                  <li className='image_block col-0.5'>
                    <img
                      className='logo_image'
                      src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg'
                    />
                  </li>
                  <li className='col-1'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='col'>
                    <div className='dropdown'>
                      <a
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Work
                      </a>
                      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        <Link className='dropdown-item' to='/listToDo'>
                          Show to-do list
                        </Link>
                        <Link className='dropdown-item' to='/createToDo'>
                          Create to-do
                        </Link>
                        <Link className='dropdown-item' to='/sampleToDo'>
                          Show sample to-do
                        </Link>
                      </div>
                    </div>
                    {/* <Link to='/workspage'>Work Management</Link> */}
                  </li>
                  <li className='col'>
                    <div className='dropdown'>
                      <a
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Group
                      </a>
                      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        <Link className='dropdown-item' to='/groups'>
                          Show group list
                        </Link>
                        <Link className='dropdown-item' to='/groupCreate'>
                          Create group
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className='col'>
                    <div className='dropdown'>
                      <a
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Process
                      </a>
                      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        <Link className='dropdown-item' to='/processes'>
                          Show list process
                        </Link>
                        <Link className='dropdown-item' to='/processpage'>
                          Show processes you participate in
                        </Link>
                        <Link className='dropdown-item' to='/processpage'>
                          Create new process
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className='col'>
                    <Link to='/'>Schedule</Link>
                  </li>
                  <li className='col'>
                    <Link to='/'>KPI</Link>
                  </li>
                  <li className='col'>
                    <Link to='/corporate'>Corporate</Link>
                  </li>
                  <li className='col'></li>
                </ul>
              ) : (
                <ul className='row'>
                  <li className='image_block col-0.5'>
                    <img
                      className='logo_image'
                      src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg'
                    />
                  </li>
                  <li className='col-1'>
                    <Link to='/'>Home</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className='col-3'>
            {this.props.LoginStatus.isLogin ? (
              <ul className='row'>
                <li className='col'>
                  <Link to='/profile'>{this.props.LoginStatus.name}</Link>
                </li>
                <li className='col'>
                  <Link to='/' onClick={this.logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className='row'>
                <li className='col'>
                  <Link to='/login'>Sign In</Link>
                </li>
                <li className='col'>
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(Navbar);
