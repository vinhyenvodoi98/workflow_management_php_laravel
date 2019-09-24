import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='row'>
                    <div className='col left'>
                        <div className='image_block'>
                            <img
                                className='logo_image'
                                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg'
                            />
                        </div>
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
