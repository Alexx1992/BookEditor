import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import BookEditor from '../BookEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={BookEditor} />
          <Route path="/edit/:id" component={BookEditor} />
        </Switch>
      </div>
    );
  }
}

export default App;
