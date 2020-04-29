import React from 'react';
import './App.css';
import MoodRing from './MoodRing/MoodRing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I just really wish things made sense again...
        </p>
        <h3>
          I know this is weird, but with time and practice it will make sense and we will all be AWESOME
        </h3>
        <MoodRing />
      </header>
    </div>
  ); // end return of JSX
} // end App function

export default App;
