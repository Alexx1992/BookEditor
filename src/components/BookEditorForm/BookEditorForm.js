import React from "react";
import { withFormik } from "formik";

import Input from "../Input";
import ImageLoader from "../ImageLoader";
import Select from "../Select";

import "./BookEditorForm.css";

const formikEnhancer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => {
    const { book } = props;

    if (!book) {
      return {
        name: '',
        author: [],
        pageCount: 0,
        publishingHouse: '',
        publicationYear: 2019,
        released: '',
        isbn: '',
        image: ''
      };
    } else {
      return {...book};
    }
  },
  handleSubmit: (values, { props }) => {
    const isbnReg = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

    if (values.isbn && !isbnReg.test(values.isbn)) return alert('ISBN указан в неверном формате');
    props.book ? props.updateBook(values) : props.addBook(values);

    props.history.goBack();
  },
  displayName: "BookEditorForm"
});

const BookEditorForm = props => {
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    toggleModal,
    addAuthor,
    deleteAuthor,
    authors,
    book
  } = props;

  return (
    <form onSubmit={handleSubmit} id="book" key="book">
      <ImageLoader
        onChange={image => setFieldValue('image', image)}
        inputValue={values.image}
        inputAttrs={{ name: "image" }} />
      <Input
        label="Заголовок"
        isRequired
        inputValue={values.name}
        onChange={handleChange}
        inputAttrs={{ maxLength: 30, name: "name", required: true }}
      />
      <Select
        label="Автор"
        isRequired
        selectValue={values.author}
        onChange={author => setFieldValue('author', author)}
        addAuthor={addAuthor}
        deleteAuthor={deleteAuthor}
        authors={authors}
        selectAttrs={{ name: "author", multiple: true, required: true }}
        toggleModal={toggleModal}
      />
      <Input
        label="Количество страниц"
        isRequired
        inputType="number"
        inputValue={values.pageCount}
        onChange={handleChange}
        inputAttrs={{ min: 0, max: 10000, name: "pageCount", required: true }}
      />
      <Input
        label="Издательство"
        inputValue={values.publishingHouse}
        onChange={handleChange}
        inputAttrs={{ maxLength: 30, name: "publishingHouse" }}
      />
      <Input
        label="Год публикации"
        inputType="number"
        inputValue={values.publicationYear}
        onChange={handleChange}
        inputAttrs={{ min: 1800, name: "publicationYear" }}
      />
      <Input
        label="Дата выхода в тираж"
        inputType="date"
        inputValue={values.released}
        onChange={handleChange}
        inputAttrs={{ min: "1800-01-01", name: "released" }}
      />
      <Input
        label="ISBN"
        inputValue={values.isbn}
        onChange={handleChange}
        inputAttrs={{ name: "isbn", /*pattern: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/ */}}
      />

      {<button type="submit">{book ? 'Редактировать книгу' : 'Добавить книгу'}</button>}
    </form>
  );
};

export default formikEnhancer(BookEditorForm);