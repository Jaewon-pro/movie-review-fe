import React from "react";
import { Routes, Route } from 'react-router-dom';

import Main from "./Main";
import Movie from "./Movie";
import NotFound from "../components/notFound/NotFound";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import MyProfile from "./MyProfile";

export function RoutesInfo() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies/:imdbId" element={<Movie />} />
        <Route path="/my-profile" element={<MyProfile />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
