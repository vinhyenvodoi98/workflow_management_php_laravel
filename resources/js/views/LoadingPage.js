import React, { Component } from 'react';
import './LoadingPage.css';

class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='loading'>
        <div className='circle'></div>
        LOADING...
      </div>
    );
  }
}

export default LoadingPage;
