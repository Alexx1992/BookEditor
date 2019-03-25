import * as types from '../constants';
import { v4 } from 'node-uuid';

export const addAuthor = author => ({
  type: types.ADD_AUTHOR,
  id: v4(),
  author
});

export const deleteAuthor = id => ({
  type: types.DELETE_AUTHOR,
  id
});