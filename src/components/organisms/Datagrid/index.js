import React, { useEffect, useState } from "react";
import "./style.css";
import Caption from "../Caption";
import Thead from "../../molecules/thead";
import { rawData } from "./data";
import axios from "../../../axios";
import RowList from "../RowList";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../slices/role/roleSlice";
import { modify, add, deleteEmp } from "../../../slices/employee/employeeSlice";
const DataGrid = () => {
  const role = useSelector((state) => state.roleSlice.value);
  const empData = useSelector((state) => state.employeeSlice.empData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("role is::", role);
    axios.get("getHiearachy/" + role).then((res) => {
      let data = res.data;
      const { detail } = data;
      dispatch(add(detail));
    });
  }, [role]);
  const rowClickHandler = (id) => {};
  const radioButtonClickHandler = (param) => {
    console.log(`${param} is clicked`);
    dispatch(setRole(param));
  };
  setRole;
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
