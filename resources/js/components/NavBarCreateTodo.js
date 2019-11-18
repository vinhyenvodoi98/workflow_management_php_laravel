import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateTodoPage from '../views/CreateTodoPage';
import All from '../views/viewListTodo/All';

import './Navbar.css';

function NavBarCreateTodo(props) {
  return (
    <BrowserRouter>
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
      <Switch>
        <Route exact path='/listToDo' component={All} />
        <Route exact path='/listToDo/All' component={All} />
        <Route exact path='/listToDo/Process' component={CreateTodoPage} />
        <Route exact path='/listToDo/Processing' component={CreateTodoPage} />
        <Route exact path='/listToDo/OutOfDate' component={CreateTodoPage} />
        <Route exact path='/listToDo/Wait' component={CreateTodoPage} />
        <Route exact path='/listToDo/Finish' component={CreateTodoPage} />
        <Route exact path='/listToDo/Pause' component={CreateTodoPage} />
        <Route exact path='/listToDo/Cancelled' component={CreateTodoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default NavBarCreateTodo;
