import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import actions from "../../store/actions";

import './Header.css';
import AddIcon from './img/add.svg';
import SortIcon from './img/sort.svg';

const mapDispatchToProps = dispatch => {
  return {
    sortByYear: sortType => {
      dispatch(actions.sortByYear(sortType));
    },
    sortByName: sortType => {
      dispatch(actions.sortByName(sortType))
    }
  };
};

class Header extends Component {
  sortTypeByYear = 'ASC';
  sortTypeByName = 'ASC';

  sortByPublicationYear = () => {
    this.props.sortByYear(this.sortTypeByYear);
    this.sortTypeByYear = this.sortTypeByYear === 'ASC' ? 'DESC' : 'ASC';
  };

  sortByName = () => {
    this.props.sortByName(this.sortTypeByName);
    this.sortTypeByName = this.sortTypeByName === 'ASC' ? 'DESC' : 'ASC';
  };

  render() {
    return (
      <header className="HeaderContainer">
        <div className="AddBook">
          <Link to="/new">
            <img src={AddIcon} alt="Добавить новую книгу" />
          </Link>
        </div>
        <div className="Logo">
          <h1>Books</h1>
        </div>
        <div className="SortWrapper">
          <figure className="sort headline" onClick={this.sortByName}>
            <img src={SortIcon} alt="Сортировка по заголовку" />
            <figcaption>По заголовку</figcaption>
          </figure>
          <figure className="sort year" onClick={this.sortByPublicationYear}>
            <img src={SortIcon} alt="Сортировка по году публикации" />
            <figcaption>По году публикации</figcaption>
          </figure>
        </div>
      </header>
    );
  }
}

export default  connect(
  null,
  mapDispatchToProps
)(Header);