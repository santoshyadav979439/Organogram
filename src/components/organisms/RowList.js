import React, { useState } from 'react';
import Row from '../atoms/Row';
import axios from '../../axios';
const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
  const rowClickHandler = (id, isExpanded, hierarchy) => {
    console.log('h', hierarchy)
    if (!isExpanded) {
      setIsRowClicked(false);
      return;
    }
    setIsRowClicked(true);
    const currentEmpId = id.split('-');
    let data = [<Row {...props} rowClickHandler={rowClickHandler} />];
    if (hierarchy == null) {
      axios
        .get('getHiearachy/admin/' + currentEmpId[currentEmpId.length - 1])
        .then((res) => {
          const childData = res.data.detail[0].hierarchy;
          const newData = data.concat(
            childData != null
              ? childData.map((el) => (
                  <Row
                    key={el.id}
                    {...el}
                    id={`${el.id}`}
                    rowClickHandler={rowClickHandler}
                  />
                ))
              : []
          );
          setHierarchy(newData);
        })
        .catch((err) => console.log(err));
    } else {
      const h = hierarchy.map((el) => (
        <Row
          key={el.id}
          {...el}
          id={`${el.id}`}
          rowClickHandler={rowClickHandler}
        />
      ));

      data = [...data, ...h];
      setHierarchy(data);
    }
  };
  return !isRowClicked ? (
    <Row {...props} id={props.id} rowClickHandler={rowClickHandler} />
  ) : (
    hierarchy
  );
};

export default RowList;
