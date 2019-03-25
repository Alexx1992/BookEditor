import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const { label, inputType, inputValue, inputAttrs, onChange, isRequired } = props;
  return (
    <div className="InputContainer">
     <label>{label}{isRequired && <span className="IsRequired">*</span>}</label>
     <input type={inputType} value={inputValue} {...inputAttrs} onChange={onChange}/>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  inputAttrs: PropTypes.object
};

Input.Input = {
  inputType: 'text'
};

export default Input;