import React, { Component } from 'react';
import store from '../store';
import PieChart from '../components/PieChart';
import * as loginAction from '../actions/loginAction';

import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var token;
        try {
            window.addEventListener('load', () => {
                if ((token = localStorage.getItem('token')))
                    store.dispatch(loginAction.login(token));
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='underNav'></div>
                <div className='col-12 fullBox'>
                    <div className='row '>
                        <div className='col-6'>
                            <div className='col-12 area home_area_heght'>
                                <p className='content'>Work overview</p>
                                <PieChart />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='col-12 area home_area_heght'>
                                <p className='content'>Urgent work</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 fullBox'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='col-12 area home_area_heght'>
                                <p className='content'>Remind work</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='col-12 area home_area_heght'>
                                <p className='content'>Working diary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
