import React, { useEffect, useState } from "react";
import "./style.css";
import Caption from "../Caption";
import Thead from "../../molecules/thead";
import { rawData } from "./data";
import axios from "../../../axios";
import RowList from "../RowList";
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
  const rowClickHandler = (id) => {};
  const radioButtonClickHandler = (param) => {
    console.log(`${param} is clicked`);
  };
  return (
    <div className="dataGrid">
      <table id="organogram" style={{ display: "table" }}>
        <Caption radioButtonClickHandler={radioButtonClickHandler} />
        <Thead />
        <tbody>
          {empData.map((el) => {
            return <RowList key={el.id} {...el} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
