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
                    <div className='col'>
                        <ul className='right'>
                            <li>
                                <a href='#contact'>Sign In</a>
                            </li>
                            <li>
                                <a href='#contact'>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
