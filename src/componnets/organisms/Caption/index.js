import React from 'react';
import * as XLSX from 'xlsx';
import { modify } from '../../../slices/Caption/modifySlice';
import { useDispatch } from 'react-redux';
import { rawData } from '../Datagrid/data';
import './style.css';
const Caption = ({ radioButtonClickHandler }) => {
  const dispatch = useDispatch();
  const viewOrModifyClickHandler = () => {
    dispatch(modify());
  };

  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'organogram.xlsx');
  };

  const handleDownloadClick = () => {
    downloadExcel(rawData.details);
  };

  return (
    <caption>
      <span id='header-left'>
        <input
          type='radio'
          name='hierarchytype'
          id='Administrative'
          checked='checked'
          onClick={() => radioButtonClickHandler('admin')}
        />{' '}
        <label htmlFor='Administrative'>Administrative</label>
        <input
          type='radio'
          name='hierarchytype'
          id='Functional'
          onClick={() => radioButtonClickHandler('functional')}
        />{' '}
        <label htmlFor='Functional'>Functional</label>
      </span>{' '}
      
      <div className='caption-right-action' id='header-right'>
        <input
          type='checkbox'
          id='modify'
          data-on='Modifying'
          data-off='&nbsp;Viewing&nbsp;'
          onClick={viewOrModifyClickHandler}
        />
        <button onClick={handleDownloadClick}>Download</button>
      </div>
    </caption>
  );
};

export default Caption;
