import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './LoginPage.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            msg: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        await this.setState({
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name')
        });
        await axios
            .post('http://localhost:8181/api/signup', {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
            .then((res) => {
                console.log(res);
                window.location.href = '/login';
            })
            .catch((error) => {
                this.setState({ msg: error.response.data.errors.email });
                // console.log(error.response.data.errors.email);
            });
    }

    render() {
        return (
            <div className='login_container '>
                <div className='box'>
                    <div className='choice_container'>
                        <div className='c1'>
                            <div className='c11' />

                            <Route
                                render={({ history }) => (
                                    <div
                                        id='left'
                                        onClick={() => {
                                            history.push('/login');
                                        }}
                                    >
                                        <h1 className='s1class'>
                                            <span>SIGN</span>
                                            <span className='su'>IN</span>
                                        </h1>
                                    </div>
                                )}
                            />
                            <Route
                                render={({ history }) => (
                                    <div
                                        id='right'
                                        onClick={() => {
                                            history.push('/register');
                                        }}
                                    >
                                        <h1 className='s2class text-color'>
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
                            <div className='form_box'>
                                <h1 className='space_around'>Sign Up</h1>
                                <form className='form' onSubmit={this.handleSubmit}>
                                    {this.state.msg ? (
                                        <p className='colorError'>{this.state.msg}</p>
                                    ) : (
                                        <p></p>
                                    )}
                                    <label className='space_around' htmlFor='name'>
                                        Enter Fullname
                                    </label>
                                    <input
                                        className='input space_around'
                                        id='name'
                                        name='name'
                                        type='text'
                                        placeholder='Full name*'
                                    />

                                    <label className='space_around' htmlFor='email'>
                                        Enter email
                                    </label>
                                    <input
                                        className='input space_around'
                                        id='email'
                                        name='email'
                                        type='text'
                                        placeholder='email*'
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
            </div>
        );
    }
}

export default RegisterPage;
