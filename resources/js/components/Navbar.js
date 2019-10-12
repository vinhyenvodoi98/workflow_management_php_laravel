import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='row'>
                    <div className='row left'>
                        <div className='image_block'>
                            <img
                                className='logo_image'
                                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg'
                            />
                        </div>
                        {/* <HashRouter> */}
                        <ul className='row'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/workspage'>Work Management</Link>
                            </li>
                            <li>
                                <Link to='/grouppage'>Group Managment</Link>
                            </li>
                            <li>
                                <Link to='/processpage'>Process Management</Link>
                            </li>
                        </ul>
                        {/* </HashRouter> */}
                    </div>
                    <div className='row'>
                        <ul className='right'>
                            <li>
                                <Link to='/login'>Sign In</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
