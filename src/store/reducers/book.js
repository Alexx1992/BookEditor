import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, SORT_BY_YEAR, SORT_BY_NAME } from '../constants';

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.id,
        ...action.book
      }];

    case UPDATE_BOOK: {
      return state.map(book => {
        if (book.id === action.book.id){
          return { ...book, ...action.book }
        }
        return book;
      });
    }

    case DELETE_BOOK:
      return state.filter(book => book.id !== action.id);

    case SORT_BY_YEAR: {
      const asc = (a, b) => a.publicationYear - b.publicationYear;
      const desc = (a, b) => b.publicationYear - a.publicationYear;

      const sortArray = state.sort(action.sortType === 'ASC' ? asc : desc);
      return [...sortArray];
    }
    case SORT_BY_NAME: {
      const sort = (a, b) => {

        const firstName = a.name.toLowerCase();
        const secondName = b.name.toLowerCase();

        if (action.sortType === 'ASC') {
          if (firstName < secondName) return -1;
          if (firstName > secondName) return 1;
        } else {
          if (firstName < secondName) return 1;
          if (firstName > secondName) return -1;
        }
        return 0;

      };

      const sortArray = state.sort(sort);

      return [...sortArray];
    }

    default: return state;
  }
};

export default books;