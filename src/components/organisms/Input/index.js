import React from "react";
import PropTypes from "prop-types";

const Input = ({ error, label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input error={error} label={label} id={id} {...props} />
      {error && <p>{error}</p>}
    </>
  );
};

const propTypes = {
  label: PropTypes.string.isRequired,
};

Input.propTypes = propTypes;

export default Input;
