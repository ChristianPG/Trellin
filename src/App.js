import React from 'react';
import logo from './logo.svg';
import { CardList } from './list/list.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="column">
        <CardList name='To Do'/>
      </div>
      <div className="column">
        <CardList name='Done'/>
      </div>
    </div>
  );
}

export default App;
