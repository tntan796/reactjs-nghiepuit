import React from 'react';
import './App.css';
import Header from './components/start/header.js';
import Forms from './components/forms/forms';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid p-2">
        <div className="container">
            <Forms></Forms>
        </div>
      </div>
    </div>
  );
}

export default App;
