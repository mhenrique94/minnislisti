import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectToggle } from './features/toggle/toggleSlice';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
