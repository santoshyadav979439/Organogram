import React from "react";
import PropTypes from "prop-types";

const Select = ({ error, options, valueKey, labelKey, ...props }) => {
  return (
    <>
      <select {...props}>
        {options.map((option) => {
          return <option value={option[valueKey]}>{option[labelKey]}</option>;
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
