import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoodRing from './MoodRing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I just really wish things made sense again...
        </p>
        <h3>
          I know this is weird, but with time and practice it will make sense and we will all be AWESOME
        </h3>
        <MoodRing />
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
  ); // end return of JSX
} // end App function

export default App;
