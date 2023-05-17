
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
        <p>App</p>
      </header>
      <BrowserRouter>
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Sign Up</p></Link>
      <Link to="/movies/123"><p>Movie123</p></Link>
      <Link to="/movies/tt1630029"><p>movie 아바타</p></Link>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies/:imdbId" element={<Movie />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
