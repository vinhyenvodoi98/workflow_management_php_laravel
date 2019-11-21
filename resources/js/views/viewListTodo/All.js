import React from 'react';
import { Button } from 'react-bootstrap';
import ListAll from './ListAll';

import ProcessModal from '../../modals/ProcessModals';

var role = {
  isCreater: false,
  isWorker: true,
  isApprover: true,
  isSharer: false
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
          {role.isCreater ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Creater
        </label>
        <label className='label--checkbox'>
          {role.isWorker ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Worker
        </label>
        <label className='label--checkbox'>
          {role.isApprover ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Approver
        </label>
        <label className='label--checkbox'>
          {role.isSharer ? (
            <input type='checkbox' className='checkbox' checked disabled />
          ) : (
            <input type='checkbox' className='checkbox' disabled />
          )}
          Sharer
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
