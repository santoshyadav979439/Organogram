import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormFields, useValidation } from "../../../../hooks";
import { FIELDS, VALIDATION_SCHEMA } from "./formFields";
import { Input, Select } from "../../../../components/organisms";
import { DESIGNATIONS, PROJECTS } from "../../../../constants";
import axios from "../../../../axios";
import { update } from "../../../../slices/dropdown/dropdownSlice";

const styles = {
  row: {
    display: "flex",
    marginBottom: 10,
  },
  button: {
    width: 120,
    marginTop: 15,
    cursor: "pointer",
  },
};

const AddEmp = ({
  id,
  name,
  designation,
  level,
  adminManager,
  functionalManager,
  direct,
  total,
  projects,
  isEdit,
  onSubmit,
}) => {
  const [projectsObj, setProjectsObj] = useState();
  const dropdownsData = useSelector((store) => store.dropdownSlice.dropdowns);
  const dispatch = useDispatch();
  const { formFields, setFormFields, createChangeHandler } = useFormFields({
    [FIELDS.ID]: "",
    [FIELDS.NAME]: "",
  });

  const { errors, validateOnSubmit, validateOnBlur } = useValidation({
    validationSchema: VALIDATION_SCHEMA,
    values: formFields,
  });

  useEffect(() => {
    if (isEdit) {
      setFormFields({
        [FIELDS.ID]: id,
        [FIELDS.NAME]: name,
        [FIELDS.DESIGNATION]: designation?.id ? designation : null,
        [FIELDS.ADMINISTRATIVE_MANAGER]: adminManager?.id ? adminManager : null,
        [FIELDS.FUNCTIONAL_MANAGER]: functionalManager?.id
          ? functionalManager
          : null,
        [FIELDS.PROJECTS]: projects,
        [FIELDS.LEVEL]: level,
      });
    }
    const obj = {};
    projects.forEach((p) => {
      obj[p.id] = p.name;
    });
    setProjectsObj(obj);

    if (dropdownsData?.designation?.length === 0) {
      axios
        .get("getAddPrefil")
        .then((res) => {
          dispatch(update(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleCheckbox = (e) => {
    setProjectsObj((prevData) => {
      if (e.target.checked) {
        return { ...prevData, [e.target.id]: e.target.dataset.label };
      }
      delete prevData[e.target.id];
      return prevData;
    });
  };

  const handleSubmit = () => {
    if (validateOnSubmit()) {
      const formattedProjects = Object.keys(projectsObj).map((id) => {
        return {
          id,
          name: projectsObj[id],
        };
      });
      onSubmit({ ...formFields, projects: formattedProjects });
    }
  };

  return (
    <div id="newfields">
      <h3>Add aide to {name}</h3>
      {/* <label htmlFor="neweid">Id :</label> */}
      <div style={styles.row}>
        <Input
          label="Id"
          type="text"
          size="25"
          id="neweid"
          placeholder="FNPXXXXX"
          pattern="FNP[0-9]{3}"
          name={FIELDS.ID}
          title="Please enter id in the format FNPXXXXX"
          onChange={createChangeHandler(FIELDS.ID)}
          value={formFields[FIELDS.ID]}
          error={errors[FIELDS.ID]?.error}
          errorMessage={errors[FIELDS.ID]?.message}
          onBlur={validateOnBlur(FIELDS.ID)}
        />
      </div>
      <div style={styles.row}>
        <Input
          label={"Name"}
          type="text"
          size="100"
          id="newename"
          onChange={createChangeHandler(FIELDS.NAME)}
          value={formFields[FIELDS.NAME]}
          error={errors[FIELDS.NAME]?.error}
          errorMessage={errors[FIELDS.NAME]?.message}
          onBlur={validateOnBlur(FIELDS.NAME)}
        />
      </div>
      <div style={styles.row}>
        <Input
          label={"Level"}
          type="number"
          size="100"
          id="level"
          onChange={createChangeHandler(FIELDS.LEVEL)}
          value={formFields[FIELDS.LEVEL]}
          error={errors[FIELDS.LEVEL]?.error}
          errorMessage={errors[FIELDS.LEVEL]?.message}
          onBlur={validateOnBlur(FIELDS.LEVEL)}
        />
      </div>
      {/* createChangeHandler(FIELDS.DESIGNATION) */}
      <div style={styles.row}>
        <label htmlFor="newedesig">Designation</label>
        <Select
          label="Designation"
          id="newedesig"
          onChange={(e) => {
            if (e.target.value) {
              createChangeHandler(FIELDS.DESIGNATION, {
                id: e.target.value,
                name: e.target[e.target.selectedIndex].dataset.label,
              })(e);
            } else {
              createChangeHandler(FIELDS.DESIGNATION)(e);
            }
          }}
          value={formFields[FIELDS.DESIGNATION]?.id || ""}
          options={dropdownsData?.designation || []}
          valueKey="id"
          labelKey="name"
          error={errors[FIELDS.DESIGNATION]?.error}
          errorMessage={errors[FIELDS.DESIGNATION]?.message}
        />
      </div>
      <div style={styles.row}>
        <label htmlFor="neweadminman">Administrative Manager</label>
        <Select
          label="Administrative Manager"
          id="neweadminman"
          options={dropdownsData?.adminManager || []}
          valueKey="id"
          labelKey="name"
          onChange={(e) => {
            if (e.target.value) {
              createChangeHandler(FIELDS.ADMINISTRATIVE_MANAGER, {
                id: e.target.value,
                name: e.target[e.target.selectedIndex].dataset.label,
              })(e);
            } else {
              createChangeHandler(FIELDS.ADMINISTRATIVE_MANAGER)(e);
            }
          }}
          value={formFields[FIELDS.ADMINISTRATIVE_MANAGER]?.id || ""}
          error={errors[FIELDS.ADMINISTRATIVE_MANAGER]?.error}
          errorMessage={errors[FIELDS.ADMINISTRATIVE_MANAGER]?.message}
        />
      </div>
      <div style={styles.row}>
        <label htmlFor="newefuncman">Functional Manager</label>
        <Select
          label="Functional Manager "
          id="newefuncman"
          options={dropdownsData?.functionalManager || []}
          valueKey="id"
          labelKey="name"
          onChange={(e) => {
            if (e.target.value) {
              createChangeHandler(FIELDS.FUNCTIONAL_MANAGER, {
                id: e.target.value,
                name: e.target[e.target.selectedIndex].dataset.label,
              })(e);
            } else {
              createChangeHandler(FIELDS.FUNCTIONAL_MANAGER)(e);
            }
          }}
          value={formFields[FIELDS.FUNCTIONAL_MANAGER]?.id || ""}
          error={errors[FIELDS.FUNCTIONAL_MANAGER]?.error}
          errorMessage={errors[FIELDS.FUNCTIONAL_MANAGER]?.message}
        />
      </div>
      <label
        htmlFor="neweprojects"
        style={{ textAlign: "left", marginTop: 15, marginBottom: 5 }}
      >
        Projects
      </label>
      <div id="projects">
        {dropdownsData?.projects?.map((p) => {
          return (
            <div>
              <input
                type="checkbox"
                id={p.id}
                onChange={handleCheckbox}
                name="neweprojects"
                data-label={p.name}
                checked={
                  isEdit
                    ? projects.find((project) => project["id"] === p.id)
                    : null
                }
              />
              <label htmlFor={p.id}>{p.name}</label>
            </div>
          );
        })}
      </div>
      <div id="addnewp">
        <button
          id="addnew"
          name="addnew"
          style={styles.button}
          onClick={handleSubmit}
        >
          {isEdit ? "Save" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddEmp;
