import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Page404.css';

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='page_404'>
        <div className='container'>
          <div className='underNav'></div>
          <div className='row'>
            <div className='col-sm-12 '>
              <div className='col-sm-10 col-sm-offset-1 text-center'>
                <div className='four_zero_four_bg'>
                  <h1 className='text-center'>404</h1>
                </div>

                <div className='contant_box_404'>
                  <h3 className='h2'>Look like you're lost</h3>

                  <p>The page you are looking for not avaible!</p>

                  <Link to='/'>
                    <button type='button' className='btn btn-success'>
                      Go to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Page404;
