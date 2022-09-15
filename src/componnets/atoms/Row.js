import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../slices/popup/popupSlice';
import AddEmp from '../organisms/Forms/AddEmp';
import BasicModal from '../molecules/Modal';

const Row = ({
  id,
  name,
  designation,
  level,
  adminManager,
  functionalManager,
  direct,
  total,
  projects,
  rowClickHandler,
}) => {
  const [isExpanded, setIsExpended] = useState(false);
  const dispatch = useDispatch();
  const modify = useSelector((state) => state.modify.value);
  const onClickHandler = () => {
    setIsExpended(!isExpanded);
    rowClickHandler(id);
  };
  return (
    <>
      <tr
        id={id}
        className={isExpanded ? 'l1 expanded' : 'l1'}
        onClick={onClickHandler}
      >
        <td className='etree'>
          <span className='node'>
            <span className='expcoll'></span>
            {name}
          </span>

          <div
            className='axns'
            style={
              !modify ? { visibility: 'hidden' } : { visibility: 'visible' }
            }
          >
           
            <button className='axn edite'>✎</button>
            <button className='axn movee'>✥</button>
            <button className='axn deletee'>🗑</button>
            <button onClick={() => dispatch(open())} className='axn addso'>
              +
            </button>
          </div>
        </td>
        <td className='eid'>{id}</td>
        <td className='ename'>{name}</td>
        <td className='edesig'>{designation.name}</td>
        <td className='elevel'>{level}</td>
        <td className='eadminman'>{adminManager.name}</td>
        <td className='efuncman'>{functionalManager.name}</td>
        <td className='edreports'>{direct}</td>
        <td className='etreports'>{total}</td>
        <td className='eprojects'>All</td>
      </tr>
      <BasicModal>
        <AddEmp />{' '}
      </BasicModal>
    </>
  );
};

export default Row;
