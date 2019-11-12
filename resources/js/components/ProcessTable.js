import React from 'react';

function ProcessTable(props) {
    return (
        <div>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name of process</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Action</th>
                        <th scope='col'>Number of times process was performed</th>
                        <th scope='col'>Creater</th>
                    </tr>
                </thead>
                <tbody>
                    {props.processes.map((process, i) => (
                        <tr key={i}>
                            <th scope='row'>{i + 1}</th>
                            <td>{process.processName}</td>
                            <td>{process.description}</td>
                            <td>{process.role ? 'admin' : 'not admin'}</td>
                            <td>{process.numberOfTime}</td>
                            <td>{process.creater}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProcessTable;
