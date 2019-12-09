import React from 'react';

function Table(props) {
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <div>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Mission Description</th>
            <th scope='col'>Action</th>
            <th scope='col'>Leader</th>
            <th scope='col'>Works</th>
            <th scope='col'>Members</th>
          </tr>
        </thead>
        <tbody>
          {props.name === 'Active'
            ? props.members.map((menber, i) =>
                menber.expiration_date > formatDate(new Date()) ? (
                  <tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{menber.name}</td>
                    <td>{menber.description}</td>
                    <td>
                      <input
                        className='btn btn-outline-success btn-edit mr-2'
                        type='button'
                        value='Edit'
                      />
                      <input
                        className='btn btn-outline-danger btn-delete mr-2'
                        type='button'
                        value='Delete'
                      />
                    </td>
                    <td>{menber.leader}</td>
                    <td>{menber.performed_works}</td>
                    <td>{menber.members}</td>
                  </tr>
                ) : (
                  <></>
                )
              )
            : props.members.map((menber, i) =>
                menber.expiration_date < formatDate(new Date()) ? (
                  <tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{menber.name}</td>
                    <td>{menber.description}</td>
                    <td>
                      <input
                        className='btn btn-outline-success btn-edit mr-2'
                        type='button'
                        value='Edit'
                      />
                      <input
                        className='btn btn-outline-danger btn-delete mr-2'
                        type='button'
                        value='Delete'
                      />
                    </td>
                    <td>{menber.leader}</td>
                    <td>{menber.performed_works}</td>
                    <td>{menber.members}</td>
                  </tr>
                ) : (
                  <></>
                )
              )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
