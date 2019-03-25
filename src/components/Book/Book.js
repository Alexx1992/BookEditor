import React from 'react';

import './Book.css';
import bookIcon from './img/book.svg';

const Book = (props) => {
  const {id, name, author, publicationYear, publishingHouse, released, pageCount, isbn, image} = props.book;

  const getAuthorName = (ids) => {
    const { authors } = props;
    const authorsName = authors.reduce((res, author) => ids.includes(author.id) ? [...res, author.fullName] : res, []);

    return authorsName.join(', ');
  };
  const getImage = () => {
    return (
      image ?
        <img src={image} className="Cover" alt="Обложка"/> :
        <div className="ImageWrapper">
          <img src={bookIcon} alt="Картинка по умолчанию"/>
        </div>
    )
  };
  return (
    <li className="BookWrapper">
      <div className="Book">
        {getImage()}
        <div className="BookData">
          <h2 className="Headline">{name}</h2>
          <p className="Author">{getAuthorName(author)}</p>
          <p className="PublicationYear">{publicationYear}</p>
          <div className="SecondaryData">
            <p>
              <label>Изадтельство</label>
              <span>{publishingHouse || "\u2013"}</span>
            </p>
            <p>
              <label>Дата выхода в тираж:</label>
              <span>{released || "\u2013"}</span>
            </p>
            <p>
              <label>Количество страниц:</label>
              <span>{pageCount || "\u2013"}</span>
            </p>
            <p>
              <label>ISBN:</label>
              <span>{isbn || "\u2013"}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ButtonContainer">
        <button className="Edit" onClick={props.editBook(id)}>Редактировать</button>
        <button className="Remove" onClick={props.removeBook(id)}>Удалить</button>
      </div>
    </li>
  );
};

export default Book;