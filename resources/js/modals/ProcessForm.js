import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Slider } from 'rsuite';
import { Select } from 'antd';
import moment from 'moment';

import './modals.css';

const dateFormat = 'YYYY-MM-DD';
const { Option } = Select;

function ProcessForm(props) {
  const [targets, settargets] = useState([
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus'
  ]);

  const [startDate, setstartDate] = useState(new Date());

  const [endDate, setendDate] = useState(new Date());

  return (
    <div className='col process-form'>
      <div className='row form-group'>
        <div className='col-6'>
          <input
            type='text'
            className='form-control'
            id='staticEmail2'
            disabled
            value={props.todo.name}
          />
        </div>
        <div className='col-3'>
          <select className='custom-select' id='inputGroupSelect01'>
            <option defaultValue>{props.todo.priority}</option>
            <option value='1'>low</option>
            <option value='2'>medium</option>
            <option value='3'>high</option>
          </select>
        </div>
        <div className='col-3'>
          <select className='custom-select' id='inputGroupSelect01'>
            <option defaultValue>{props.todo.status}</option>
            <option value='1'>Not started</option>
            <option value='2'>Pendding</option>
          </select>
        </div>
      </div>

      <hr />
      <div className='Description'>
        <p>Description</p>
        <div className='col-6'>
          <p>{props.todo.description}</p>
        </div>
      </div>
      <div className='info'>
        <p>Info</p>
        <div className='col form-group'>
          <div className='row form-group'>
            <div className='col'>
              <p className='col'>Progress</p>
              <Slider progress value={parseInt(props.todo.progress)} />
            </div>
            <div className='col'>
              <p className='col'>Start :</p>
              <DatePicker value={moment(props.todo.start_date, dateFormat)} format={dateFormat} />
            </div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <p className='col'>Score</p>
              <Slider progress value={parseInt(props.todo.score)} />
            </div>
            <div className='col'>
              <p className='col'>End :</p>
              <DatePicker value={moment(props.todo.due_date, dateFormat)} format={dateFormat} />
            </div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <div className='col'>
                <div className='row justify-content-end'>
                  <button className='btn'>Save</button>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <button className='btn'>Request for approval</button>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessForm;
