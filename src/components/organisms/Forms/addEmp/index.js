import React, { useState, useEffect } from "react";
import { useFormFields, useValidation } from "../../../../hooks";
import { FIELDS, VALIDATION_SCHEMA } from "./formFields";
import { Input, Select } from "../../../../components/organisms";
import { DESIGNATIONS, PROJECTS } from "../../../../constants";

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
        [FIELDS.DESIGNATION]: designation,
        [FIELDS.ADMINISTRATIVE_MANAGER]: adminManager,
        [FIELDS.FUNCTIONAL_MANAGER]: functionalManager,
        [FIELDS.PROJECTS]: projects,
      });
    }
  }, []);

  const handleCheckbox = (e) => {
    console.log(e.target.dataset.label);
    setProjectsObj((prevData) => {
      if (e.target.checked) {
        return { ...prevData, [e.target.id]: e.target.dataset.label };
      }
      delete prevData[e.target.id];
      return prevData;
    });
  };

  const handleSubmit = () => {
    const formattedProjects = Object.keys(projectsObj).map((id) => {
      return {
        id,
        name: projectsObj[id],
      };
    });
    onSubmit({ ...formFields, projects: formattedProjects });
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
          // onBlur={validateOnBlur(FIELDS.ID)}
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
          options={DESIGNATIONS}
          valueKey="id"
          labelKey="label"
        />
      </div>
      <div style={styles.row}>
        <label htmlFor="neweadminman">Administrative Manager</label>
        <Select
          label="Administrative Manager"
          id="neweadminman"
          options={[{ id: "FNP00179", label: "Vasanth Kamatgi" }]}
          valueKey="id"
          labelKey="label"
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
        />
      </div>
      <div style={styles.row}>
        <label htmlFor="newefuncman">Functional Manager</label>
        <Select
          label="Functional Manager "
          id="newefuncman"
          options={[{ id: "FNP00179", label: "Vasanth Kamatgi" }]}
          valueKey="id"
          labelKey="label"
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
        />
      </div>
      <label
        htmlFor="neweprojects"
        style={{ textAlign: "left", marginTop: 15, marginBottom: 5 }}
      >
        Projects
      </label>
      <div id="projects">
        {PROJECTS.map((p) => {
          return (
            <div>
              <input
                type="checkbox"
                id={p.id}
                onChange={handleCheckbox}
                name="neweprojects"
                data-label={p.label}
                checked={
                  isEdit
                    ? projects.find((project) => project["id"] === p.id)
                    : null
                }
              />
              <label htmlFor={p.id}>{p.label}</label>
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
          Add
        </button>
      </div>
    </div>
  );
};

export default AddEmp;
