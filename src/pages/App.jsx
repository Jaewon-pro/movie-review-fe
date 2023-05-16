
import '../components/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from "./Main";
import Login from "./Login";
import NotFound from "./NotFound";
import Register from './Register';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> heell</p>
      </header>
      <BrowserRouter>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register">Sign Up</Link>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:imdbId" element={<Movie />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
