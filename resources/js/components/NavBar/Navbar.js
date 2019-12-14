import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from '../../store';
import * as loginAction from '../../actions/loginAction';
import './Navbar.css';
import { Icon } from 'antd';
import { Switch } from 'antd';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {}

  logout() {
    store.dispatch(loginAction.logout());
  }

  onChangeNavbar(checked) {
    store.dispatch(loginAction.UpdateNavPosition(checked));
  }

  onChangeLanguage(checked) {
    console.log(`switch to ${checked}`);
  }

  onChangeColour(checked) {
    store.dispatch(loginAction.UpdateBackgroud(checked));
    if (checked) {
      document.body.style.background = 'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)';
      document.body.style.height = '100%';
    } else {
      document.body.style.background = 'linear-gradient(90deg, #141e30 0%,#243b55 100% )';
      document.body.style.height = '100%';
    }
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
                    <Link className='Link_color' to='/'>
                      Home
                    </Link>
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
                          Show all
                        </Link>
                        <Link className='dropdown-item' to='/createToDo'>
                          Create new work
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
                          Show all
                        </Link>
                        <Link className='dropdown-item' to='/groupCreate'>
                          Create new group
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
                    <Link className='Link_color' to='/schedule'>
                      Schedule
                    </Link>
                  </li>
                  <li className='col'>
                    <Link className='Link_color' to='/KPI'>
                      KPI
                    </Link>
                  </li>
                  <li className='col'>
                    <div className='dropdown'>
                      <a
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Corporate
                      </a>
                      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        <Link className='dropdown-item' to='/corporate'>
                          Create new department
                        </Link>
                      </div>
                    </div>
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
                    <Link className='Link_color' to='/'>
                      Home
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className='col-3'>
            {this.props.LoginStatus.isLogin ? (
              <ul className='row'>
                <li className='col-1'>
                  <div className='dropdown'>
                    <a
                      id='dropdownMenuButton'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <Icon type='setting' />
                    </a>
                    <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                      <div className='col'>
                        <div className='row'>
                          <p className='col-9'>Setting Navbar</p>
                          <Switch size='small' defaultChecked onChange={this.onChangeNavbar} />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='row'>
                          <p className='col-9'>Setting Language</p>
                          <Switch size='small' defaultChecked onChange={this.onChangeLanguage} />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='row'>
                          <p className='col-9'>Setting Colour</p>
                          <Switch size='small' checked={this.props.LoginStatus.backGround} onChange={this.onChangeColour} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='col-7'>
                  <Link className='Link_color' to='/profile'>
                    {this.props.LoginStatus.name}
                  </Link>
                </li>
                <li className='col-3'>
                  <Link className='Link_color' to='/' onClick={this.logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className='row'>
                <li className='col'>
                  <Link className='Link_color' to='/login'>
                    Sign In
                  </Link>
                </li>
                <li className='col'>
                  <Link className='Link_color' to='/register'>
                    Register
                  </Link>
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
