
import '../components/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Main from "./Main";
import Login from "./Login";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> heell</p>
      </header>
      <BrowserRouter>
      <Link to="/login">Login</Link>

        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
