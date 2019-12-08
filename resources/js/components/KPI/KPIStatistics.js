import React from 'react';

export default function KPIStatistics(params) {
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
        </div>
      </div>

      <div className='mini-form-area'>Cong viec abc</div>
    </div>
  );
}
