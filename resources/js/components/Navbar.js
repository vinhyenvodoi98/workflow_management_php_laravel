import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

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
                    {this.props.LoginStatus.isLogin ? (
                        <div className='row'>
                            <ul className='right'>
                                <li>
                                    <Link to='/profile'>{this.props.LoginStatus.name}</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        LoginStatus: state.LoginStatus
    };
};

export default compose(connect(mapStatetoProps))(Navbar);
