import React from "react";
import {Route, Routes} from 'react-router-dom';

import Main from "./Main";
import Movie from "./Movie";
import NotFound from "../components/notFound/NotFound";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import MyProfile from "./MyProfile";
import UserProfile from "./UserProfile";
import MovieList from "./MovieList";

export function RoutesInfo() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/movies/:imdbId" element={<Movie/>}/>
        <Route path="/me" element={<MyProfile/>}/>
        <Route path="/accounts/:username" element={<UserProfile/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}
