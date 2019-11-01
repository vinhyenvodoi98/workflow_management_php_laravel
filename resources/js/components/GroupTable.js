import React, { Component } from 'react';

class GroupTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                { fullname: 'Do Hoang', mission: 'president' },
                { fullname: 'Ha Viet', mission: 'super villain' },
                { fullname: 'Tran Dan', mission: 'jesus noi tieng viet' }
            ]
        };
    }
    render() {
        return (
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Full name</th>
                        <th scope='col'>Mission Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.members.map((menber, i) => (
                        <tr key={i}>
                            <th scope='row'>{i + 1}</th>
                            <td>{menber.fullname}</td>
                            <td>{menber.mission}</td>
                            <td>Action</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default GroupTable;
