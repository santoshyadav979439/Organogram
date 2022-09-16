import React from "react";
import PropTypes from "prop-types";

const Input = ({ error, errorMessage, label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id} style={{ marginRight: 10 }}>
        {label}
      </label>
      <span>
        <input error={error} label={label} id={id} {...props} />
        {error && (
          <p
            style={{
              fontSize: 12,
              color: "red",
              marginTop: 5,
              marginBottom: 5,
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

Input.propTypes = propTypes;

export default Input;
