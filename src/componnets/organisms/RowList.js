import React, { useState } from 'react';
import Row from '../atoms/Row';
import axios from '../../axios';
const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
  const rowClickHandler = (id) => {
    setIsRowClicked(true);
    axios.get('admin/' + id).then((res) => {
      const childData = res.data.detail;
      const data = [<Row {...props} rowClickHandler={rowClickHandler} />];
      const newData = data.concat(
        childData.map((el) => <Row {...el} rowClickHandler={rowClickHandler} />)
      );
      setHierarchy(newData);
    });
  };
  return !isRowClicked ? (
    <Row {...props} rowClickHandler={rowClickHandler} />
  ) : (
    hierarchy
  );
};

export default RowList;
