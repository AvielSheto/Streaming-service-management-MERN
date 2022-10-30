import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/sign/Login";
import Home from "./pages/Home";
import Header from "./components/Header"
import Register from "./components/sign/Register";
import Main from "./components/main/Main.jsx";
import ManageUsers from "./components/main/userManagement/ManageUsers";
import Movies from "./components/main/movies/Movies";
import Subscriptions from "./components/main/Subscriptions";
import AddUser from "./components/main/userManagement/AddUser"
import Users from "./components/main/userManagement/Users"
// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddMovie from "./components/main/movies/AddMovie";
import AllMovies from "./components/main/movies/AllMovies";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<Main />} >
            <Route path="movies" element={<Movies />} >
              <Route path="allmovies" element={<AllMovies />} />
              <Route path="addmovie" element={<AddMovie />} />
            </Route>
            <Route path="subscription" element={<Subscriptions />} />
            <Route path="usermangement" element={<ManageUsers />} >
              <Route path="users" element={<Users />} />
              <Route path="adduser" element={<AddUser />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
