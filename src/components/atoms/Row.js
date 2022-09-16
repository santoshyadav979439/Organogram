import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from "../../slices/popup/popupSlice";
import { AddEmp } from "../organisms/Forms";
import BasicModal from "../molecules/Modal";
import { modify, add, deleteEmp } from "../../slices/employee/employeeSlice";
import axios from "../../axios";

const Row = (props) => {
  const {
    id,
    name,
    designation,
    level,
    adminManager,
    functionalManager,
    direct,
    total,
    projects,
    hierarchy,
    rowClickHandler,
  } = props;
  console.log("projects", projects);
  const [isExpanded, setIsExpended] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const modify = useSelector((state) => state.modify.value);
  const employee = useSelector((state) => state.employeeSlice.empData);

  const onClickHandler = () => {
    const extended = !isExpanded;

    setIsExpended(extended);

    rowClickHandler(id, extended, hierarchy);
  };
  return (
    <>
      <tr
        id={id}
        className={isExpanded ? "l1 expanded" : "l1"}
        onClick={onClickHandler}
      >
        <td className="etree">
          <span className="node">
            <span className="expcoll"></span>
            {name}
          </span>

          <div
            className="axns"
            style={
              !modify
                ? { visibility: "hidden", zIndex: 9999 }
                : { visibility: "visible", zIndex: 9999 }
            }
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEdit(true);
                dispatch(open());
              }}
              className="axn edite"
            >
              ✎
            </button>
            <button className="axn movee">✥</button>
            <button
              className="axn deletee"
              onClick={(e) => {
                e.stopPropagation();
                const userResponse = confirm(
                  "Are you sure you want to delete."
                );
                if (userResponse) {
                  axios
                    .delete("empOperation", {
                      data: {
                        id,
                        name,
                        designation,
                        level,
                        adminManager,
                        functionalManager,
                        projects,
                      },
                    })
                    .then((res) => {
                      let data = res.data;
                      dispatch(close());
                      window.location.reload();
                    });
                }
              }}
            >
              🗑
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEdit(false);
                dispatch(open());
              }}
              className="axn addso"
            >
              +
            </button>
          </div>
        </td>
        <td className="eid">{id}</td>
        <td className="ename">{name}</td>
        <td className="edesig">{designation.name}</td>
        <td className="elevel">{level}</td>
        <td className="eadminman">{adminManager.name}</td>
        <td className="efuncman">{functionalManager.name}</td>
        <td className="edreports">{direct}</td>
        <td className="etreports">{total}</td>
        <td className="eprojects">{projects.map((el) => el.name).join(",")}</td>
      </tr>
      <BasicModal>
        <AddEmp
          isEdit={isEdit}
          id={id}
          name={name}
          designation={designation}
          level={level}
          adminManager={adminManager}
          functionalManager={functionalManager}
          direct={direct}
          total={total}
          projects={projects}
          onSubmit={(data) => {
            if (isEdit) {
              axios.put("empOperation", data).then((res) => {
                let resData = res.data;
                dispatch(close());
                console.log("resData", resData);
                rowClickHandler(resData.id);
                // window.location.reload();
              });
            } else {
              axios.post("empOperation", data).then((res) => {
                let resData = res.data;
                dispatch(close());
                rowClickHandler(resData.id);
                console.log("resData", resData);
                // window.location.reload();
              });
            }
          }}
        />
      </BasicModal>
    </>
  );
};

export default Row;
