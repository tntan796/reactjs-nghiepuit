import React from 'react';
import './App.css';
import Header from './components/header.js';
import SettingColorText from './components/setting-test-color/settings/setting';
function App() {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid p-2">
        <div className="container">
          <div className="row">
              <SettingColorText></SettingColorText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
