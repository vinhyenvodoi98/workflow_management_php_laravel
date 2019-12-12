import React, { Component } from 'react';
import CreateNewToDo from '../components/CreateNewToDo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import './CreateTodoPage.css';

class CreateToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData: null
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(id) {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    var url = 'http://localhost:8181/api/user/groups/' + id + '/works/basic_info';

    axios.get(url).then(response => {
      // handle success
      this.setState({ groupData: response.data });
    });
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
              <p className='title'>Create new work</p>
              <CreateNewToDo groupData={this.state.groupData} />
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

export default compose(connect(mapStatetoProps))(CreateToDoPage);
