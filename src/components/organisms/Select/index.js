import React from "react";
import PropTypes from "prop-types";

const Select = ({
  label,
  error,
  errorMessage,
  options,
  valueKey,
  labelKey,
  ...props
}) => {
  return (
    <>
      <span>
        <select {...props} style={{ marginLeft: 10 }}>
          <option value="">Select {label}</option>
          {options.map((option) => {
            return (
              <option
                value={`${option[valueKey]}`}
                data-label={option[labelKey]}
              >
                {option[labelKey]}
              </option>
            );
          })}
        </select>
        {error && (
          <p
            style={{
              fontSize: 12,
              color: "red",
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 10,
            }}
          >
            {errorMessage}
          </p>
        )}
      </span>
    </>
  );
};

const propTypes = {
  label: PropTypes.string.isRequired,
};

Select.propTypes = propTypes;

export default Select;
