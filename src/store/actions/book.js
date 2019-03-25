import * as types from '../constants';
import { v4 } from 'node-uuid';

export const addBook = book => ({
  type: types.ADD_BOOK,
  id: v4(),
  book
});

export const updateBook = book => ({
  type: types.UPDATE_BOOK,
  book
});

export const deleteBook = id => ({
  type: types.DELETE_BOOK,
  id
});

export const sortByYear = sortType => ({
  type: types.SORT_BY_YEAR,
  sortType
});

export const sortByName = sortType => ({
  type: types.SORT_BY_NAME,
  sortType
});
