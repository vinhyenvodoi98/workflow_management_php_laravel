import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './modals.css';
import ProcessForm from './ProcessForm';
import ProcessActivity from './ProcessActivity';
import axios from 'axios';

class ProcessModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      groups: [],
      groupSelected: 'Unit1'
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.fetchWorkData();
  }

  fetchWorkData() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    axios.get('http://localhost:8181/api/user/works').then(response => {
      this.setState({ groups: response.data });
    });
  }

  selectGroup(group) {
    this.setState({ groupSelected: group });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <>
        <Button variant='btn btn-light' onClick={this.open}>
          Details
        </Button>

        <Modal
          className='process'
          size='lg'
          show={this.state.showModal}
          onHide={this.close}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Work detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='col'>
              <div className='row'>
                <div className='col-2 mx-sm-3 shadow-box'>
                  <div className='sidebar-item'>
                    <div className='make-me-sticky'>
                      <div className='item'>
                        <p className='title'>
                          <strong>Your works</strong>
                        </p>
                        <ul className='nav nav-pills nav-stacked' role='tablist'>
                          {this.state.groups.map((group, index) => (
                            <li key={index} style={{ overflow: 'hidden' }}>
                              <a
                                style={{ fontSize: '0.8vw' }}
                                role='tab'
                                data-toggle='pill'
                                onClick={e => this.selectGroup(group)}
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
                <div className='col-9 shadow-box'>
                  <div className='content-section'>
                    <ProcessForm todo={this.state.groupSelected} />
                    <ProcessActivity />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='row'>
            <div className='col-6'></div>
            <div className='col-2'>
              <Button variant='secondary' onClick={this.close}>
                Close
              </Button>
            </div>

            <div className='col-3'>
              <Button variant='primary' onClick={this.close}>
                Save Changes
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProcessModals;
