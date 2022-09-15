import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, error, options, valueKey, labelKey, ...props }) => {
  return (
    <>
      <select {...props} style={{ marginLeft: 10 }}>
        <option value="">Select {label}</option>
        {options.map((option) => {
          return (
            <option value={`${option[valueKey]}`} data-label={option[labelKey]}>
              {option[labelKey]}
            </option>
          );
        })}
      </select>
      {error && <p>{error}</p>}
    </>
  );
};

const propTypes = {
  label: PropTypes.string.isRequired,
};

Select.propTypes = propTypes;

export default Select;
