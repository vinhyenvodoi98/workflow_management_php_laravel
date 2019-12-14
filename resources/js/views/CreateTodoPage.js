import React, { Component } from 'react';
import CreateNewToDo from '../components/CreateNewToDo';
import { compose } from 'redux';
import { connect } from 'react-redux';

import './CreateTodoPage.css';

class CreateToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: null
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
                    {this.props.LoginStatus.currentUserGroup ?
                      this.props.LoginStatus.currentUserGroup.map((group, index) => (
                        <li key={index} onClick={() => this.setState({ groupId: group.id })}>
                          <a
                            role='tab'
                            data-toggle='pill'
                            style={{ overflow: 'hidden', fontSize: '0.8vw' }}
                          >
                            {group.name}
                          </a>
                        </li>
                    )):<></>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='content-section'>
              <p className='title'>Create new work</p>
              <CreateNewToDo groupId={this.state.groupId} />
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
