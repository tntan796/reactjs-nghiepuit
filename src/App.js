import React from 'react';
import './App.css';
import Header from './components/header.js';
import Container from './components/container.js';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid p-2">
        <div className="container">
          <Container>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
