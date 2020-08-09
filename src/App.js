import React from 'react';
import './App.css';
import ManageWork from './components/manage-works/manage-work';

function App() {
  return (
    <div>
      <div className="container-fluid p-2">
        <div className="container">
            <ManageWork></ManageWork>
        </div>
      </div>
    </div>
  );
}

export default App;
