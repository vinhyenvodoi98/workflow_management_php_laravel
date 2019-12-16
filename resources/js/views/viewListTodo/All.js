import React from 'react';
import { Button } from 'react-bootstrap';
import ListAll from './ListAll';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

import ProcessModal from '../../modals/ProcessModals';

var role = {
  isInformed: false,
  isResponsible: true,
  isAccountable: true,
  isConsulted: true
};

function onChangeResponsible(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChangeAccountable(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChangeConsulted(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChangeInformed(e) {
  console.log(`checked = ${e.target.checked}`);
}

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
          <Checkbox onChange={onChangeResponsible}>Responsible</Checkbox>
          <Checkbox onChange={onChangeAccountable}>Accountable</Checkbox>
          <Checkbox onChange={onChangeConsulted}>Consulted</Checkbox>
          <Checkbox onChange={onChangeInformed}>Informed</Checkbox>
        </div>
      </div>
      <div className='col'>
        <div className='row justify-content-end'>
          <ProcessModal />
        </div>
      </div>
      {props.groupData !== null ? <ListAll groupData={props.groupData} /> : <ListAll />}
    </div>
  );
}

export default All;
