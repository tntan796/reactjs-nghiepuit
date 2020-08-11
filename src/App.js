import React from 'react';
import './App.css';
import ManageWorkRedux from './components/manage-works-redux/components/manage-work-redux';

function App() {
  return (
    <div>
      <div className="container-fluid p-2">
        <div className="container">
            <ManageWorkRedux></ManageWorkRedux>
        </div>
      </div>
    </div>
  );
}

export default App;
