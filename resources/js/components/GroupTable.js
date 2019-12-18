import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class GroupTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(user_id) {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios
      .post('http://localhost:8181/api/groups/group/user/delete', {
        group_id: this.props.groupId,
        user_id
      })
      .then(response => {
        // console.log(response);
        this.notifyA();
        this.props.fetchUserData(this.props.groupId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  notifyA() {
    toast.success('Delete User Successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  render() {
    return (
      <div>
        <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Task</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((member, i) =>
              member.role === this.props.tableName ? (
                <tr key={i}>
                  <th scope='row'>{i + 1}</th>
                  <td>{member.name}</td>
                  <td>{member.task}</td>
                  <td>
                    <input
                      className='btn btn-outline-success btn-edit mr-2'
                      type='button'
                      value='Edit'
                    />
                    <input
                      className='btn btn-outline-danger btn-delete mr-2'
                      type='button'
                      value='Delete'
                      onClick={() => this.deleteUser(member.id)}
                    />
                  </td>
                </tr>
              ) : (
                <tr key={i}></tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroupTable;
