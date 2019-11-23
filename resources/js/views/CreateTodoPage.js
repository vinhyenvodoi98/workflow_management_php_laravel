import React, { Component } from 'react';
import CreateNewToDo from '../components/CreateNewToDo';

import './CreateTodoPage.css';

class CreateToDoPage extends Component {
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
                    <strong>Your group</strong>
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
              <p className='title'>Create New ToDo</p>
              <CreateNewToDo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateToDoPage;
