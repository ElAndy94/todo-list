import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import List from './components/Lists/List';
import ListForm from './components/Lists/Listform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ListForm />
        <hr />
        <List />
      </div>
    );
  }
}

export default App;
