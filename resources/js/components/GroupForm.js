import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import MiniGroupForm from './MiniGroupForm';
import DatePicker from 'react-datepicker';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './GroupForm.css';

class GroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      leader_id: null,
      startDate: new Date(),
      endtDate: new Date(),
      start: null,
      end: null
    };

    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.handleChange_startDate = this.handleChange_startDate.bind(this);
    this.handleChange_endDate = this.handleChange_endDate.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange_startDate(date) {
    this.setState({
      startDate: date,
      start: this.formatDate(date)
    });
  }

  handleChange_endDate(date) {
    this.setState({
      endtDate: date,
      end: this.formatDate(date)
    });
  }

  createGroup() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios
      .post('http://localhost:8181/api/groups', {
        name: this.state.name,
        description: this.state.description,
        founding_date: this.state.start,
        expiration_date: this.state.end,
        leader_id: this.state.leader_id
      })
      .then(response => {
        console.log(response);
        this.notifyA();
      });
  }

  onSelect(optionsList, selectedItem) {
    console.log(selectedItem.id);
    this.setState({
      leader_id: selectedItem.id
    });
  }
  onRemove(optionList, removedItem) {}

  notifyA() {
    toast.success('Success Create Group !', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  render() {
    return (
      <div className='form text_align_form'>
        <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
        <div className='form-group'>
          <p>Name :</p>
          <input
            type='text'
            className='form-control col-6'
            id='usr'
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div className='form-group'>
          <p>Description :</p>
          <textarea
            type='text'
            className='form-control col-6'
            id='usr'
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
        </div>
        <div className='form-group'>
          <p>Manager :</p>
          <div className='non-padding col-6'>
            {this.props.LoginStatus.users ? (
              <Multiselect
                options={this.props.LoginStatus.users} // Options to display in the dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue='name' // Property name to display in the dropdown options
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-4'>
            <p>Start :</p>
            <DatePicker selected={this.state.startDate} onChange={this.handleChange_startDate} />
          </div>
          <div className='col-4'>
            <p>End :</p>
            <DatePicker selected={this.state.endtDate} onChange={this.handleChange_endDate} />
          </div>
          <div className='col-4'>
            <div className='align-items-end' style={{ marginTop: '7px' }}>
              <button type='button' className='btn' onClick={this.createGroup}>
                <Link to='/groups'>Save</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <p>Vice leader :</p>
          <MiniGroupForm name='Vice leader' />
        </div>
        <div className='form-group'>
          <p>Staff :</p>
          <MiniGroupForm name='Staff' />
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

export default compose(connect(mapStatetoProps))(GroupForm);
