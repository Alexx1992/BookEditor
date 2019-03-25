import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

import editIcon from "./img/edit.svg";

const Select = (props) => {
  const {
    label,
    selectValue,
    selectAttrs,
    toggleModal,
    isRequired
  } = props;

  const selectAuthor = (e) => {
    const { selectValue } = props;
    const authorId = e.target.value;
    let authors = [];

    if (selectValue.includes(authorId)) {
      authors = selectValue.filter(item => item !== authorId);
    } else {
      authors = props.selectValue.concat(e.target.value);
    }

    props.onChange(authors);
  };

  return (
    <div className="SelectContainer">
      <label>{label}{isRequired && <span className="IsRequired">*</span>}</label>

      <select value={selectValue} onChange={selectAuthor} {...selectAttrs} name="selectAuthor">
        {
          props.authors.map(author => (
            <option key={author.id} value={author.id} label={author.fullName} />
          ))
        }
      </select>
      <img
        onClick={toggleModal}
        src={editIcon}
        alt="Редактировать список авторов"
        title="Редактировать список авторов"
      />
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  selectValue: PropTypes.array,
  onChange: PropTypes.func,
  selectAttrs: PropTypes.object
};

export default Select;
