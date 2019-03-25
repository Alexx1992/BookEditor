import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import authors from './author';
import books from './book';

export default (history) => combineReducers({
  router: connectRouter(history),
  authors: authors,
  books: books
});