import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class CreateTodoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'Srigar', id: 1 },
        { name: 'Sam', id: 2 }
      ],

      startDate: new Date(),
      endtDate: new Date()
    };

    this.handleChange_startDate = this.handleChange_startDate.bind(this);
    this.handleChange_endDate = this.handleChange_endDate.bind(this);
  }

  handleChange_startDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleChange_endDate(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        {this.props.todo ? (
          <div>
            <div className='form-group'>
              <p className='col'>Todo :</p>
              <div className='input-group-prepend'>
                <span className='input-group-text col-3'>{this.props.todo}</span>
              </div>
            </div>
            <div className='form-group'>
              <p>Description :</p>
              <textarea type='text' className='form-control col-6' id='usr' />
            </div>
            <div className='form-group'>
              <p className='col'>Select worker :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.state.options} // Options to display in the dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group'>
              <p className='col'>Select Approver :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.state.options} // Options to display in the dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group'>
              <p className='col'>Select Observer :</p>
              <div className='non-padding col-6 select_backgroud'>
                <Multiselect
                  options={this.state.options} // Options to display in the dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue='name' // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-4'>
                <p className='col'>Select StartDate :</p>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange_startDate}
                />
              </div>
              <div className='col-4'>
                <p className='col'>Select EndtDate :</p>
                <DatePicker selected={this.state.endtDate} onChange={this.handleChange_endDate} />
              </div>
            </div>
            <div className='form-group'>
              <p className='col-3'>Select priority level :</p>
              <select
                defaultValue={'DEFAULT'}
                className='col-3 custom-select'
                id='inputGroupSelect01'
              >
                <option value='DEFAULT' disabled>
                  Choose...
                </option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
              </select>
            </div>

            <div className='form-group'>
              <p className='col-3'>Select KPL :</p>
              <select
                defaultValue={'DEFAULT'}
                className='col-3 custom-select'
                id='inputGroupSelect01'
              >
                <option value='DEFAULT' disabled>
                  Choose...
                </option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default CreateTodoDetail;
