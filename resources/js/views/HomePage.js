import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PieChart from '../components/PieChart';

import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    var token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    axios.get('http://localhost:8181/api/works/analyze').then(response => {
      this.setState({ data: response.data });
    });
  }

  render() {
    return (
      <div className='container'>
        {this.props.LoginStatus.isLogin ? (
          <div>
            <div className='underNav'></div>
            <div className='col-12 fullBox'>
              <div className='row '>
                <div className='col-6'>
                  <div className='col-12 area home_area_heght'>
                    <p className='content'>Work overview</p>
                    {this.state.data !== null ? <PieChart data={this.state.data} /> : <></>}
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12 area home_area_heght'>
                    <p className='content'>Urgent work</p>
                    <div className='col position-left'>
                      <div>
                        <a>Work number 1</a>
                      </div>
                      <div>
                        <a>Work number 2</a>
                      </div>
                      <div>
                        <a>Work number 3</a>
                      </div>
                      <div>
                        <a>Work number 4</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 fullBox'>
              <div className='row'>
                <div className='col-6'>
                  <div className='col-12 area home_area_heght'>
                    <p className='content'>Remind work</p>
                    <div className='col position-left'>
                      <div>
                        Check <a>work number 1</a>
                      </div>
                      <div>
                        Check <a>work number 2</a>
                      </div>
                      <div>
                        Check <a>work number 3</a>
                      </div>
                      <div>
                        Check <a>work number 4</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12 area home_area_heght'>
                    <p className='content'>Working diary</p>
                    <div className='col position-left'>
                      <div>
                        Checked <a>work number 5</a> at 2019-05-05
                      </div>
                      <div>
                        Checked <a>work number 7</a> at 2019-07-09
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='underNav'></div>
            <div className='row'>
              <div className='col-6'>
                <div className='blank'></div>
                <h2 className='title-style home-text-color'>
                  Yolo lets you work more collaboratively and get more done.
                </h2>
                <p className='content-style home-text-color'>
                  Be professional and the one thing we can promise is your business will grow super
                  fast
                </p>
              </div>
              <div className='col-6'>
                <img src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg' />
              </div>
            </div>
            <div className='homepage-button'>
              <Link to='/register'>
                <button type='button' className='btn btn-success'>
                  Sign Up – It’s Free!
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    LoginStatus: state.LoginStatus
  };
};

export default compose(connect(mapStatetoProps))(HomePage);
