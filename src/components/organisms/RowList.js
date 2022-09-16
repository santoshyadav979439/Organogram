import React, { useState } from 'react';
import Row from '../atoms/Row';
import axios from '../../axios';
const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
  const rowClickHandler = (id) => {
    setIsRowClicked(true);
    const currentEmpId = id.split('-');
    axios
      .get('getHiearachy/admin/' + currentEmpId[currentEmpId.length - 1])
      .then((res) => {
        const childData = res.data.detail[0].hierarchy;
        console.log('child data', childData);
        const data = [<Row {...props} rowClickHandler={rowClickHandler} />];
        const newData = data.concat(
          childData.map((el) => (
            <Row
              key={el.id}
              {...el}
              id={`${el.id}`}
              rowClickHandler={rowClickHandler}
            />
          ))
        );
        console.log(newData);
        console.log('row clicked', isRowClicked);
        setHierarchy(newData);
      })
      .catch((err) => console.log(err));
  };
  return !isRowClicked ? (
    <Row {...props} id={props.id} rowClickHandler={rowClickHandler} />
  ) : (
    hierarchy
  );
};

export default RowList;
