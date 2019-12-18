import React, { useState } from 'react';

export default function KPIPersonal(params) {
  const [datas, setDatas] = useState([
    {
      weighted: 50,
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      weighted: 30,
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      weighted: 70,
      targetName: 'abc',
      evaluationCriteria: 'grow 10000$'
    },
    {
      weighted: 120,
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
        <div className='row'>
          <div className='col-3'>
            <p>Month :</p>
            <input type='text' className='form-control' value='7/2019' />
          </div>
          <div className='col-3'>
            <p>Accountable :</p>
            <input type='text' className='form-control' value='Tran Dan' />
          </div>
          <div className='col-3'>
            <p>Status :</p>
            <select defaultValue={'DEFAULT'} className='custom-select' id='inputGroupSelect01'>
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

      <p>Target</p>
      <div className='mini-form-area'>
        <div className='form-group'>
          <div className='col'>
            <div className='row'>
              <p className='col-3'>Target name :</p>
              <div className='input-group-prepend col-6'>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div className='col'>
            <div className='row'>
              <p className='col-3'>Parent target :</p>
              <div className='input-group-prepend col-6'>
                <select defaultValue={'DEFAULT'} className='custom-select' id='inputGroupSelect01'>
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
          <div className='col'>
            <div className='row'>
              <p className='col-3'>Weight :</p>
              <div className='input-group-prepend col-6'>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>
        </div>

        <div className='form-group'>
          <div className='col'>
            <div className=' row'>
              <p className='col-3'>Evaluation criteria :</p>
              <div className='col-6'>
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
    </div>
  );
}
