import React, { Component } from 'react';
import CreateTodoPage from '../views/CreateTodoPage';
import All from '../views/viewListTodo/All';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import { compose } from 'redux';
import { connect } from 'react-redux';

import './CreateTodoPage.css';

class ListToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(id) {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    var url = 'http://localhost:8181/api/user/groups/' + id + '/works';

    axios.get(url).then(response => {
      // handle success
      this.setState({ groupData: response.data });
    });
  }

  componentDidMount() {
    console.log(this.props.LoginStatus.currentUserGroup);
    this.fetchData(this.props.LoginStatus.currentUserGroup);
  }

  render() {
    return (
      <div className='container'>
        <div className='underNav'></div>
        <div className='row'>
          <div className='col-3'>
            <div className='sidebar-item'>
              <div className='make-me-sticky'>
                <div className='item'>
                  <p className='title'>
                    <strong>Your groups</strong>
                  </p>
                  <ul className='nav nav-pills nav-stacked' role='tablist'>
                    {this.props.LoginStatus.currentUserGroup.map((group, index) => (
                      <li key={index} onClick={() => this.fetchData(group.id)}>
                        <a
                          role='tab'
                          data-toggle='pill'
                          style={{ overflow: 'hidden', fontSize: '0.8vw' }}
                        >
                          {group.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='content-section'>
              <Tabs>
                <TabList className='title'>
                  <Tab>All</Tab>
                  <Tab>Prioritize</Tab>
                  <Tab>Process</Tab>
                  <Tab>Processing</Tab>
                  <Tab>Out of date</Tab>
                  <Tab>Wait</Tab>
                  <Tab>Finish</Tab>
                  <Tab>Pause</Tab>
                </TabList>

                <TabPanel>
                  <All groupData={this.state.groupData} />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
                <TabPanel>
                  <CreateTodoPage />
                </TabPanel>
              </Tabs>
            </div>
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

export default compose(connect(mapStatetoProps))(ListToDoPage);
