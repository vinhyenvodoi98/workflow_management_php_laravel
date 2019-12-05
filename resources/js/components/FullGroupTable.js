import React from 'react';

function Table(props) {
  return (
    <div>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Mission Description</th>
            <th scope='col'>Action</th>
            <th scope='col'>Total work performed</th>
            <th scope='col'>Leader</th>
            <th scope='col'>Number of member</th>
          </tr>
        </thead>
        <tbody>
          {props.members.map((menber, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{menber.fullname}</td>
              <td>{menber.mission}</td>
              <td>{menber.role ? 'admin' : 'not admin'}</td>
              <td>{menber.totalwork}</td>
              <td>{menber.leader}</td>
              <td>{menber.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
