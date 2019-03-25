import { ADD_AUTHOR, DELETE_AUTHOR } from '../constants';

const authors = (state = [], action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return [...state, {
        id: action.id,
        ...action.author
      }];
    case DELETE_AUTHOR:
      return state.filter(author => author.id !== action.id);
    default: return state;
  }
};

export default authors;