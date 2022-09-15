import React, { useState } from "react";
import Row from "../atoms/Row";
import axios from "../../axios";
const RowList = (props) => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [hierarchy, setHierarchy] = useState([]);
  const rowClickHandler = (id) => {
    // setIsRowClicked(true);
    const currentEmpId = id.split("-");
    axios
      .get("admin/" + currentEmpId[currentEmpId.length - 1])
      .then((res) => {
        const childData = res.data.detail;
        const data = [<Row {...props} rowClickHandler={rowClickHandler} />];
        const newData = data.concat(
          childData.map((el) => (
            <Row
              {...el}
              id={`${id}-${el.id}`}
              rowClickHandler={rowClickHandler}
            />
          ))
        );
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
