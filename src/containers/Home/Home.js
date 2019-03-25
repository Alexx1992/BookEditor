import React, { Component, Fragment } from 'react';
import Header from '../Header';
import BookList from '../BookList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BookList />
      </Fragment>
    );
  }
}

export default Home;