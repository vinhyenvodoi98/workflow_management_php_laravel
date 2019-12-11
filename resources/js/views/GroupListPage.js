import React, { Component } from 'react';
import Table from '../components/FullGroupTable';
import './GroupListPage.css';
import './HomePage.css';
import axios from 'axios';

class GroupListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      members: []
    };

    this.select = this.select.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    axios.get('http://localhost:8181/api/groups').then(response => {
      // handle success
      this.setState({ members: response.data });
    });
  }

  select(number) {
    this.setState({
      page: number
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='underNav'></div>
        <div className='area'>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a className='nav-link active' data-toggle='tab' onClick={() => this.select(1)}>
                Active groups
                {/* ({members1.length}) */}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-toggle='tab' onClick={() => this.select(2)}>
                Expired groups
              </a>
            </li>
          </ul>
          <div className='table'>
            {this.state.page === 1 ? (
              <div>
                <Table members={this.state.members} name='Active' />
              </div>
            ) : (
              <div>
                <Table members={this.state.members} name='Expired' />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupListPage;
