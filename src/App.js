import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from './components/One';
import Two from './components/Two';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One nickname= 'Maidul' age='30'/>

        <Two nickname= 'Mukul' age='31'/>
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
    </div>
  );
}

export default App;
