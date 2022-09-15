import React from 'react';
import { modify } from '../../../slices/Caption/modifySlice';
import { useDispatch } from 'react-redux';
const Caption = () => {
  const dispatch = useDispatch();
  const viewOrModifyClickHandler = () => {
    dispatch(modify());
  };
  return (
    <caption>
      <span id='header-left'>
        <input
          type='radio'
          name='hierarchytype'
          id='Administrative'
          checked='checked'
        />{' '}
        <label htmlFor='Administrative'>Administrative</label>
        <input type='radio' name='hierarchytype' id='Functional' />{' '}
        <label htmlFor='Functional'>Functional</label>
      </span>{' '}
      CET Organogram
      <span id='header-right'>
        <input
          type='checkbox'
          id='modify'
          data-on='Modifying'
          data-off='&nbsp;Viewing&nbsp;'
          onClick={viewOrModifyClickHandler}
        />
        <button onlick>Download</button>
      </span>
    </caption>
  );
};

export default Caption;
