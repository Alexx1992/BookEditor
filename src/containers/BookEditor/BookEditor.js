import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../../store/actions";
import { getAllAuthors, getAllBooks } from "../../store/selectors";

import BookEditorForm from '../../components/BookEditorForm';

import { ModalWindow } from "../../components/Modal";
import { Author } from "../../components/Author";

import "./BookEditor.css";
import backIcon from './img/back.svg';

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    authors: getAllAuthors(state),
    book: id ? getAllBooks(state).filter(book => book.id === id)[0] : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: author => {
      dispatch(actions.addAuthor(author));
    },
    deleteAuthor: id => {
      dispatch(actions.deleteAuthor(id));
    },
    addBook: book => {
      dispatch(actions.addBook(book))
    },
    updateBook: book => {
      dispatch(actions.updateBook(book))
    }
  };
};

class BookEditor extends Component {
  state = {
    isOpen: false
  };

  goBack = () => {
    this.props.history.goBack();
  };

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const { authors, addAuthor, deleteAuthor, book } = this.props;

    return (
      <section className="BookEditor">
        <header>
          <img src={backIcon} alt="Назад" title="Наза" onClick={this.goBack}/>
          <h1>{book ? 'Редактировать книгу' : 'Создать книгу'}</h1>
        </header>

        <BookEditorForm
          {...this.props}
          id="book"
          key="book"
          toggleModal={this.toggleModal}
        />
        <ModalWindow toggleModal={this.toggleModal} isOpen={isOpen}>
          <Author
            authors={authors}
            addAuthor={addAuthor}
            deleteAuthor={deleteAuthor}
          />
        </ModalWindow>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookEditor);