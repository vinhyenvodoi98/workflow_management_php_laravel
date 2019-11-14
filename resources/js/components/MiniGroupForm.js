import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import GroupTable from './GroupTable';

import './GroupForm.css';

class MiniGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'Srigar', id: 1 },
        { name: 'Sam', id: 2 }
      ]
    };
  }
  render() {
    return (
      <div className='mini-form-area'>
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
          <GroupTable />
        </div>
      </div>
    );
  }
}

export default MiniGroupForm;
