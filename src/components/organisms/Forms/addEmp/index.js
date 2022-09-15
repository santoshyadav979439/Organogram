import React, { useState } from "react";
import { useFormFields, useValidation } from "../../../../hooks";
import { FIELDS, VALIDATION_SCHEMA } from "./formFields";
import { Input, Select } from "../../../../components/organisms";
import { DESIGNATIONS } from "../../../../constants";

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
}) => {
  const [projectsObj, setProjectsObj] = useState();

  const { formFields, createChangeHandler } = useFormFields({
    [FIELDS.ID]: "",
    [FIELDS.NAME]: "",
  });

  const { errors, validateOnSubmit, validateOnBlur } = useValidation({
    validationSchema: VALIDATION_SCHEMA,
    values: formFields,
  });

  console.log({
    id,
    name,
    designation,
    level,
    adminManager,
    functionalManager,
    direct,
    total,
    projects,
  });

  const handleCheckbox = (e) => {
    setProjectsObj((prevData) => {
      return { ...prevData, [e.target.id]: e.target.checked };
    });
  };

  console.log("projectObj", projectsObj);

  return (
    <div id="newfields">
      <h3>Add aide to {name}</h3>
      {/* <label htmlFor="neweid">Id :</label> */}
      <div>
        <Input
          label="Id :"
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
      <div>
        <Input
          label={"Name : "}
          type="text"
          size="100"
          id="newename"
          onChange={createChangeHandler(FIELDS.NAME)}
          value={formFields[FIELDS.NAME]}
        />
      </div>
      <div>
        <label htmlFor="newedesig">Designation : </label>
        <Select
          id="newedesig"
          onChange={createChangeHandler(FIELDS.DESIGNATION)}
          value={formFields[FIELDS.DESIGNATION]}
          options={DESIGNATIONS}
          valueKey="id"
          labelKey="label"
        />
      </div>
      <div>
        <label htmlFor="neweadminman">Adminitrative Manager : </label>
        <Select
          id="neweadminman"
          options={[{ id: "FNP00179", label: "Vasanth Kamatgi" }]}
          valueKey="id"
          labelKey="label"
          onChange={createChangeHandler(FIELDS.ADMINISTRATIVE_MANAGER)}
          value={formFields[FIELDS.ADMINISTRATIVE_MANAGER]}
        />
      </div>
      <div>
        <label htmlFor="newefuncman">Functional Manager : </label>
        <Select
          id="newefuncman"
          options={[{ id: "FNP00179", label: "Vasanth Kamatgi" }]}
          valueKey="id"
          labelKey="label"
          onChange={createChangeHandler(FIELDS.FUNCTIONAL_MANAGER)}
          value={formFields[FIELDS.FUNCTIONAL_MANAGER]}
        />
      </div>
      <label htmlFor="neweprojects">Projects : </label>
      <div id="projects">
        <div>
          <input
            type="checkbox"
            id="RedRoses"
            onChange={handleCheckbox}
            name="neweprojects"
          />
          <label htmlFor="Red Roses">Red Roses</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Kitchen"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="Kitchen">Kitchen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Galleria"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="Galleria">Galleria</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Golliath"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="Golliath">Golliath</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="p5"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="p5">Project 5</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="p6"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="p6">Project 6</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="p7"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="p7">Project 7</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="p8"
            name="neweprojects"
            onChange={handleCheckbox}
          />
          <label htmlFor="p8">Project 8</label>
        </div>
      </div>
      <div id="addnewp">
        <input type="submit" value="Add" id="addnew" name="addnew" />
      </div>
    </div>
  );
};

export default AddEmp;
