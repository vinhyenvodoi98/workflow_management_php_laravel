import React, { useState } from 'react';

export default function KPIGroup(params) {
  const [datas, setDatas] = useState([
    {
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    }
  ]);

  return (
    <div className='form text_align_form'>
      <div className='form-group'></div>
      <div className='form-group'>
        <p className='col-3'>Group :</p>
        <select defaultValue={'DEFAULT'} className='col-3 custom-select' id='inputGroupSelect01'>
          <option value='DEFAULT' disabled>
            Choose...
          </option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
      </div>

      <div className='form-group'>
        <div className='col'>
          <div className='row'>
            <p className='col-3'>Target :</p>
            <div className='input-group-prepend col-6'>
              <span className='input-group-text col-6'>Target 1</span>
            </div>
          </div>
        </div>
      </div>

      <div className='form-group'>
        <div className='col'>
          <div className='row'>
            <p className='col-3'>Parent target :</p>
            <div className='input-group-prepend col-6'>
              <select
                defaultValue={'DEFAULT'}
                className='col-6 custom-select'
                id='inputGroupSelect01'
              >
                <option value='DEFAULT' disabled>
                  Choose...
                </option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='form-group'>
        <div className='col form-group'>
          <div className=' row'>
            <p className='col-3'>Evaluation criteria :</p>
            <div className='col-4'>
              <textarea type='text' className='form-control' id='usr' />
            </div>
            <div className='col-3'>
              <button className='btn '> Save</button>
            </div>
          </div>
        </div>
      </div>

      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Target name</th>
            <th scope='col'>Evaluation criteria</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{data.targetName}</td>
              <td>{data.evaluationCriteria}</td>
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
