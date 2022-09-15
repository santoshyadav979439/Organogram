import React, { useEffect, useState } from 'react';
import './style.css';
import Caption from '../Caption';
import Thead from '../../molecules/thead';
import Row from '../../atoms/Row';
import { rawData } from './data';
import axios from '../../../axios';
const DataGrid = () => {
  const [empData, setEmpData] = useState(rawData.details);
/*   useEffect(() => {
    axios.get('all.json').then((res) => {
      let data = res.data;

      console.log(data)
      const { details } = data;
      console.log(details);
    });
  }, []); */
  return (
    <div className='dataGrid'>
      <table id='organogram' style={{ display: 'table' }}>
        <Caption />
        <Thead />
        <tbody>
          {empData.map((el) => {
            return <Row {...el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
