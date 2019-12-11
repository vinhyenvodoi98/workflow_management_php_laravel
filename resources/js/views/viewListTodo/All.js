import React from 'react';
import { Button } from 'react-bootstrap';
import ListAll from './ListAll';
import { Link } from 'react-router-dom';

import ProcessModal from '../../modals/ProcessModals';

var role = {
  isInformed: false,
  isResponsible: true,
  isAccountable: true,
  isConsulted: true
};

function All(props) {
  return (
    <div>
      <div className='underNav'></div>
      <div className='row form-group justify-content-between'>
        <div className='col-2'>Your role</div>
        <div className='col-3'>
          <Button variant='btn btn-light'>
            <Link className='Link_color' to='/createToDo'>
              Create new work
            </Link>
          </Button>
        </div>
      </div>
      <div className='col'>
        <div className='row' style={{ textAlign: 'left' }}>
          <label className='label--checkbox row'>
            {role.isResponsible ? (
              <input type='checkbox' className='checkbox' checked disabled />
            ) : (
              <input type='checkbox' className='checkbox' disabled />
            )}
            <p style={{ fontSize: 'small' }}>Responsible</p>
          </label>
          <label className='label--checkbox row'>
            {role.isAccountable ? (
              <input type='checkbox' className='checkbox' checked disabled />
            ) : (
              <input type='checkbox' className='checkbox' disabled />
            )}
            <p style={{ fontSize: 'small' }}>Accountable</p>
          </label>
          <label className='label--checkbox row'>
            {role.isConsulted ? (
              <input type='checkbox' className='checkbox' checked disabled />
            ) : (
              <input type='checkbox' className='checkbox' disabled />
            )}
            <p style={{ fontSize: 'small' }}>Consulted</p>
          </label>
          <label className='label--checkbox row'>
            {role.isInformed ? (
              <input type='checkbox' className='checkbox' checked disabled />
            ) : (
              <input type='checkbox' className='checkbox' disabled />
            )}
            <p style={{ fontSize: 'small' }}>Informed</p>
          </label>
        </div>
      </div>
      <div className='col'>
        <div className='row justify-content-end'>
          <ProcessModal />
        </div>
      </div>

      <ListAll />
    </div>
  );
}

export default All;
