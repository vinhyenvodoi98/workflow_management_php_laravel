import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SampleToDoForm from '../components/SampleToDoForm';

class CreateSampleToDoModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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
          Create Sample TODO
        </Button>

        <Modal size='lg' show={this.state.showModal} onHide={this.close} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Create Sample TODO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SampleToDoForm />
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

export default CreateSampleToDoModals;
