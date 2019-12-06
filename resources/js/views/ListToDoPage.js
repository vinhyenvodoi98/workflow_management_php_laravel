import React, { Component } from 'react';
import CreateTodoPage from '../views/CreateTodoPage';
import All from '../views/viewListTodo/All';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './CreateTodoPage.css';

class ListToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: ['Unit 1', 'Unit 2', 'Unit 3', 'R&D']
    };
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
                    {this.state.groups.map((group, index) => (
                      <li key={index}>
                        <a role='tab' data-toggle='pill'>
                          {group}
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
                  <Tab>Prioritize</Tab>
                  <Tab>All</Tab>
                  <Tab>Process</Tab>
                  <Tab>Processing</Tab>
                  <Tab>Out of date</Tab>
                  <Tab>Wait</Tab>
                  <Tab>Finish</Tab>
                  <Tab>Pause</Tab>
                </TabList>

                <TabPanel>
                  <All />
                </TabPanel>
                <TabPanel>
                  <All />
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

export default ListToDoPage;
