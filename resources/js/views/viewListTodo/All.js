import React from 'react';
import { Button } from 'react-bootstrap';
import ListAll from './ListAll';

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
          <Button variant='btn btn-light' href='/createToDo'>
            Create new TODO
          </Button>
        </div>
      </div>
      <div className='col-3' style={{ textAlign: 'left' }}>
        <label className='label--checkbox'>
          {role.isResponsible ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Responsible
        </label>
        <label className='label--checkbox'>
          {role.isAccountable ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Accountable
        </label>
        <label className='label--checkbox'>
          {role.isConsulted ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Consulted
        </label>
        <label className='label--checkbox'>
          {role.isInformed ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Informed
        </label>
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
