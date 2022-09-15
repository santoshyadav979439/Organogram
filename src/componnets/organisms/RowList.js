import React, { useState } from 'react';
import Row from '../atoms/Row';

const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
  const rowClickHandler = () => {
    setIsRowClicked(true);
    const data = [<Row {...props} rowClickHandler={rowClickHandler} />];
    const newData = data.concat(
      props.hierarchy.map((el) => (
        <Row {...el} rowClickHandler={rowClickHandler} />
      ))
    );
    setHierarchy(newData);
  };
  return !isRowClicked ? (
    <Row {...props} rowClickHandler={rowClickHandler} />
  ) : (
    hierarchy
  );
};

export default RowList;
