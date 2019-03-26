import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Book from '../../components/Book';

import { getAllBooks, getAllAuthors } from "../../store/selectors";

import './BookList.css';
import actions from "../../store/actions";

const mapStateToProps = state => {
  return {
    books: getAllBooks(state),
    authors: getAllAuthors(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: id => {
      dispatch(actions.deleteBook(id));
    }
  };
};

class BookList extends Component {
  editBook = (id) => () => {
    this.props.history.push(`/edit/${id}`);
  };

  removeBook = (id) => () => {
    this.props.deleteBook(id);
  };

  render() {
    return (
      this.props.books.length ?
        <ul className="BookList">
          {this.props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              authors={this.props.authors}
              editBook={this.editBook}
              removeBook={this.removeBook}/>
          ))}
        </ul> : <h1 className="EmptyListText">Добавьте книги</h1>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList));