import React, { useEffect, useState } from 'react';
import './style.css';
import Caption from '../Caption';
import Thead from '../../molecules/thead';
import { rawData } from './data';
import axios from '../../../axios';
import RowList from '../RowList';
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../../../slices/role/roleSlice';
const DataGrid = () => {
  const role = useSelector((state) => state.roleSlice.value);
  const dispatch = useDispatch();
  const [empData, setEmpData] = useState([]);
  useEffect(() => {
    console.log('role is::', role);
    axios.get('getHiearachy/' + role).then((res) => {
      let data = res.data;

      console.log(data);
      const { detail } = data;
      setEmpData(detail);
    });
  }, [role]);
  const rowClickHandler = (id) => {};
  const radioButtonClickHandler = (param) => {
    console.log(`${param} is clicked`);
    dispatch(setRole(param));
  };
  setRole;
  return (
    <div className='dataGrid'>
      <table id='organogram' style={{ display: 'table' }}>
        <Caption radioButtonClickHandler={radioButtonClickHandler} />
        <Thead />
        <tbody>
          {empData.map((el) => {
            return <RowList {...el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
