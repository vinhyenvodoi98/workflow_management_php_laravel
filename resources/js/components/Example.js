import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './Background';
import './Example.css';

export default class Example extends Component {
    render() {
        return (
            <div>
                <Background />
                <div className='content container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className='card'>
                                <div className='card-header'>Example Component</div>
                                <div className='card-body'>I'm an example component!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
