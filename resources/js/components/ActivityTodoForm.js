import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import './GroupForm.css';

class ActivityTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'Srigar', id: 1 },
        { name: 'Sam', id: 2 }
      ],
      activities: [
        { name: 'abc', desc: 'abc', Obligatory: true },
        { name: 'abc', desc: 'abc', Obligatory: true },
        { name: 'abc', desc: 'abc', Obligatory: false }
      ]
    };
  }
  render() {
    return (
      <div className='mini-form-area-modals'>
        <div className='row'>
          <p className='col-3'>Obligatory</p>
          <div>
            <input type='checkbox' className='checkbox' />
          </div>
        </div>
        <div className='form-group row'>
          <p className='col-3'>Select Deputy unit :</p>
          <div className='non-padding col-6 select_backgroud'>
            <Multiselect
              options={this.state.options} // Options to display in the dropdown
              onSelect={this.onSelect} // Function will trigger on select event
              onRemove={this.onRemove} // Function will trigger on remove event
              displayValue='name' // Property name to display in the dropdown options
            />
          </div>
          <div className='col-3'></div>
        </div>
        <div className='form-group row'>
          <p className='col-3'>Mission :</p>
          <textarea type='text' className='form-control col-6' id='usr' />
          <div className='col-3'></div>
        </div>
        <div className='form-group'>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Activity name</th>
                <th scope='col'>Description</th>
                <th scope='col'>Obligatory</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.activities.map((activity, i) => (
                <tr key={i}>
                  <th scope='row'>{i + 1}</th>
                  <td>{activity.name}</td>
                  <td>{activity.desc}</td>
                  {activity.Obligatory ? <td>YES</td> : <td>NO</td>}
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ActivityTodoForm;
