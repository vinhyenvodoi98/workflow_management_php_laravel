import React, { Component } from 'react';
import Table from '../components/FullGroupTable';
import './GroupListPage.css';
import './HomePage.css';
var members1 = [
    {
        fullname: 'Group 4',
        mission: 'Hack the world',
        role: 0,
        totalwork: 25,
        leader: 'Aluminas',
        members: 5
    },
    {
        fullname: 'Group 5',
        mission: 'Hero',
        role: 0,
        totalwork: 30,
        leader: 'Ha Viet Tien',
        members: 15
    }
];

var members2 = [
    {
        fullname: 'Group 1',
        mission: 'president',
        role: 0,
        totalwork: 20,
        leader: 'Do Duc Hoang',
        members: 5
    },
    {
        fullname: 'Group 2',
        mission: 'super villain',
        role: 1,
        totalwork: 30,
        leader: 'Ha Viet Tien',
        members: 10
    },
    {
        fullname: 'Group 3',
        mission: 'jesus noi tieng viet',
        role: 0,
        totalwork: 50,
        leader: 'Tran Dan',
        members: 15
    }
];

class GroupListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            members: [
                {
                    fullname: 'Group 1',
                    mission: 'president',
                    role: 0,
                    totalwork: 20,
                    leader: 'Do Duc Hoang',
                    members: 5
                },
                {
                    fullname: 'Group 2',
                    mission: 'super villain',
                    role: 1,
                    totalwork: 30,
                    leader: 'Ha Viet Tien',
                    members: 10
                },
                {
                    fullname: 'Group 3',
                    mission: 'jesus noi tieng viet',
                    role: 0,
                    totalwork: 50,
                    leader: 'Tran Dan',
                    members: 15
                }
            ]
        };

        this.select = this.select.bind(this);
    }

    select(number, members1) {
        this.setState({
            page: number,
            members: members1
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='underNav'></div>
                <ul className=' col row tabs'>
                    <li className='col-2 btn' onClick={() => this.select(1, members1)}>
                        Active groups ({members1.length})
                    </li>
                    <li className='col-2 btn' onClick={() => this.select(2, members2)}>
                        Groups expired
                    </li>
                </ul>
                <div className='area table'>
                    {this.state.page === 1 ? (
                        <div>
                            <Table members={this.state.members} />
                        </div>
                    ) : (
                        <div>
                            <Table members={this.state.members} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default GroupListPage;
