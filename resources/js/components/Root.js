import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './Background';
import Navbar from './Navbar';
import './Root.css';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Background />
                <div className='content container'>
                    <Navbar />
                    <p>Hello world !!!</p>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Root />, document.getElementById('example'));
}
