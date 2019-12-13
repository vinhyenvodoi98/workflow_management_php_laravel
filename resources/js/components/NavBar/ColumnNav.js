import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import store from '../../store';
import * as loginAction from '../../actions/loginAction';
import RouteSwitch from '../../routeSwitch';

const { Sider } = Layout;
const { SubMenu } = Menu;

class ColumnNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };

    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(collapsed) {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onChangeNavbar(checked) {
    store.dispatch(loginAction.UpdateNavPosition(checked));
  }

  onChangeLanguage(checked) {
    console.log(`switch to ${checked}`);
  }

  onChangeColour(checked) {
    console.log(`switch to ${checked}`);
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span> Home</span>
              <Link to='/' />
            </Menu.Item>

            <SubMenu
              key='2'
              title={
                <span>
                  <Icon type='desktop' />
                  <span>Work</span>
                </span>
              }
            >
              <Menu.Item key='3'>
                <Link to='/listToDo'>Show all</Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to='/createToDo'>Create new work</Link>
              </Menu.Item>
              <Menu.Item key='5'>
                <Link to='/sampleToDo'>Show sample to-do</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key='6'
              title={
                <span>
                  <Icon type='team' />
                  <span>Group</span>
                </span>
              }
            >
              <Menu.Item key='7'>
                <Link to='/groups'>Show all</Link>
              </Menu.Item>
              <Menu.Item key='8'>
                <Link to='/groupCreate'>Create new group</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key='9'
              title={
                <span>
                  <Icon type='project' />
                  <span>Process</span>
                </span>
              }
            >
              <Menu.Item key='10'>
                <Link to='/processes'>Show list process</Link>
              </Menu.Item>
              <Menu.Item key='11'>
                <Link to='/processpage'>Show processes you participate in</Link>
              </Menu.Item>
              <Menu.Item key='12'>
                <Link to='/processpage'>Create new process</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key='13'>
              <Icon type='calendar' />
              <span>Schedule</span>
              <Link to='/schedule' />
            </Menu.Item>

            <Menu.Item key='14'>
              <Icon type='coffee' />
              <span>KPI</span>
              <Link to='/KPI' />
            </Menu.Item>

            <SubMenu
              key='15'
              title={
                <span>
                  <Icon type='bank' />
                  <span>Corporate</span>
                </span>
              }
            >
              <Menu.Item key='16'>
                <Link to='/corporate'>Create new department</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key='17'
              title={
                <span>
                  <Icon type='setting' />
                </span>
              }
            >
              <Menu.Item key='18'>
                <div className='col'>
                  <div className='row'>
                    <p className='col-9 vw1'>Setting Navbar</p>
                    <div className='col-2'>
                      <Switch size='small' onChange={this.onChangeNavbar} />
                    </div>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key='19'>
                <div className='col'>
                  <div className='row'>
                    <p className='col-9 vw1'>Setting Language</p>
                    <div className='col-2'>
                      <Switch size='small' defaultChecked onChange={this.onChangeLanguage} />
                    </div>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key='20'>
                <div className='col'>
                  <div className='row'>
                    <p className='col-9 vw1'>Setting Colour</p>
                    <div className='col-2'>
                      <Switch size='small' defaultChecked onChange={this.onChangeColour} />
                    </div>
                  </div>
                </div>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <RouteSwitch />
        </Layout>
      </Layout>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(ColumnNav);
