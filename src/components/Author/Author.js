import React, { Component } from "react";
import { withFormik } from "formik";
import "./Author.css";
import removeIcon from "./img/cross.svg";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return {
      firstName: "",
      lastName: ""
    };
  },
  handleSubmit: (values, { props }) => {
    const { firstName, lastName } = values;
    const author = { ...values, ...{ fullName: `${firstName} ${lastName}` } };

    props.addAuthor(author);
  },
  validate: (values, props) => {},
  displayName: "AuthorForm"
});

const AuthorForm = props => {
  const { values, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} id="author" key="author">
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="Имя"
        maxLength="20"
        required
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Фамилия"
        maxLength="20"
        required
      />
      <button type="submit" id="author" title="Добавить автора" />
    </form>
  );
};

const AuthEnhancerForm = formikEnhancer(AuthorForm);

class Author extends Component {
  deleteAuthor = id => () => {
    this.props.deleteAuthor(id);
  };
  render() {
    const authors = this.props.authors.map(author => {
      return (
        <li key={author.id}>
          <span className="author">{author.fullName}</span>
          <img
            onClick={this.deleteAuthor(author.id)}
            src={removeIcon}
            alt="Удалить автора из списка"
            title="Удалить автора из списка"
          />
        </li>
      );
    });

    return (
      <div className="AuthorContainer">
        <header>
          <h2>Авторы</h2>
        </header>
        <ul>{authors}</ul>
        <AuthEnhancerForm {...this.props} id="author" key="author" />
      </div>
    );
  }
}

export default Author;
