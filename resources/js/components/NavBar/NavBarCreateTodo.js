import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function NavBarCreateTodo(props) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link className='nav-link active' data-toggle='tab' to='/listToDo'>
          Prioritize
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/All'>
          All
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/Process'>
          Process
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/Processing'>
          Processing
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/OutOfDate'>
          Out of date
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/Wait'>
          Wait
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/Finish'>
          Finish
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' data-toggle='tab' to='/listToDo/Pause'>
          Pause
        </Link>
      </li>
      {/* <li className='nav-item'>
          <Link className='nav-link' data-toggle='tab' to='/listToDo/Cancelled'>
            Cancelled
          </Link>
        </li> */}
    </ul>
  );
}

export default NavBarCreateTodo;
