import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import store from '../../store';
import * as loginAction from '../../actions/loginAction';
import RouteSwitch from '../../routeSwitch';
import { Animated } from 'react-animated-css';

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
      <Animated
        animationIn='fadeIn'
        animationOut='zoomOutDown'
        animationInDuration={1500}
        animationOutDuration={1000}
        isVisible={true}
      >
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
                <span>Show all</span>
                  <Link to='/listToDo'></Link>
                </Menu.Item>
                <Menu.Item key='4'>
                <span>Create new work</span>
                  <Link to='/createToDo'></Link>
                </Menu.Item>
                <Menu.Item key='5'>
                <span>Show sample to-do</span>
                  <Link to='/sampleToDo'></Link>
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
                <span>Show all</span>
                  <Link to='/groups'></Link>
                </Menu.Item>
                <Menu.Item key='8'>
                <span>Create new group</span>
                  <Link to='/groupCreate'></Link>
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
                <span>Show list process</span>
                  <Link to='/processes'></Link>
                </Menu.Item>
                <Menu.Item key='11'>
                <span>Show processes you participate in</span>
                  <Link to='/processpage'></Link>
                </Menu.Item>
                <Menu.Item key='12'>
                <span>Create new process</span>
                  <Link to='/processpage'></Link>
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
                  <span>Create new department</span>
                  <Link to='/corporate'></Link>
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
                      <p className='col-9'><span>Setting Navbar</span></p>
                      <div className='col-2'>
                        <Switch size='small' onChange={this.onChangeNavbar} />
                      </div>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item key='19'>
                  <div className='col'>
                    <div className='row'>
                      <p className='col-9'><span>Setting Language</span></p>
                      <div className='col-2'>
                        <Switch size='small' defaultChecked onChange={this.onChangeLanguage} />
                      </div>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item key='20'>
                  <div className='col'>
                    <div className='row'>
                      <p className='col-9'><span>Setting Colour</span></p>
                      <div className='col-2'>
                        <Switch size='small' checked={this.props.LoginStatus.backGround} onChange={this.onChangeColour} />
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
      </Animated>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(ColumnNav);
