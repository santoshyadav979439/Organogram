import React, { useState } from "react";
import Row from "../atoms/Row";
import axios from "../../axios";
const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
<<<<<<< HEAD
  const rowClickHandler = (id) => {
    console.log("@@", id);
    setIsRowClicked(true);
    const currentEmpId = id.split("-");
    axios
      .get("getHiearachy/admin/" + currentEmpId[currentEmpId.length - 1])
      .then((res) => {
        const childData = res.data.detail[0].hierarchy;
        console.log("child data", childData);
        const data = [<Row {...props} rowClickHandler={rowClickHandler} />];
        const newData = data.concat(
          childData?.map((el) => (
            <Row
              key={el.id}
              {...el}
              id={`${el.id}`}
              rowClickHandler={rowClickHandler}
            />
          ))
        );
        console.log(newData);
        console.log("row clicked", isRowClicked);
        setHierarchy(newData);
      })
      .catch((err) => console.log(err));
=======
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
>>>>>>> bbacd681eb9980f69845b5edd334dcb78e8d431f
  };
  return !isRowClicked ? (
    <Row {...props} id={props.id} rowClickHandler={rowClickHandler} />
  ) : (
    hierarchy
  );
};

export default RowList;
