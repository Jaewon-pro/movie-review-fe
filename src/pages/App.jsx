import '../components/app/App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import { RoutesInfo } from './RoutesInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>App</p>
      </header>

      <BrowserRouter>
        <NavBar />
        <RoutesInfo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
