import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='login_container'>
                <div className='box'>
                    <div className='choice_container'>
                        <div className='c1'>
                            <div className='c11' />
                            <div id='left'>
                                <h1 className='s1class text-color'>
                                    {this.homepageRender}
                                    <span>SIGN</span>
                                    <span className='su'>IN</span>
                                </h1>
                            </div>
                            <Route
                                render={({ history }) => (
                                    <div
                                        id='right'
                                        onClick={() => {
                                            history.push('/register');
                                        }}
                                    >
                                        <h1 className='s2class'>
                                            <span>SIGN</span>
                                            <span className='su'>UP</span>
                                        </h1>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='choice_container'>
                        <div className='c2'>
                            <h1 className='space_around'>Login</h1>

                            <form className='form' onSubmit={this.handleSubmit}>
                                <label className='space_around' htmlFor='username'>
                                    Enter username
                                </label>
                                <input
                                    className='input space_around'
                                    id='username'
                                    name='username'
                                    type='text'
                                    placeholder='Username*'
                                />

                                <label className='space_around' htmlFor='password'>
                                    Enter your password
                                </label>
                                <input
                                    className='input space_around'
                                    id='password'
                                    name='password'
                                    type='password'
                                    placeholder='Password*'
                                />
                                <button className='button'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
