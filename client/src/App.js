import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Login from "./components/log/login/Login";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/NavBar"
import Register from "./components/log/Register/Register";
import Main from "./components/main/Main.jsx";
import ManageUsers from "./components/main/userManagement/ManageUsers";
import Movies from "./components/main/movies/Movies";
import Subscriptions from "./components/main/subscription/Subscriptions";
import AddUser from "./components/main/userManagement/AddUser"
import Users from "./components/main/userManagement/Users"
import AddMovie from "./components/main/movies/AddMovie";
import AllMovies from "./components/main/movies/AllMovies";
import EditMovie from "./components/main/movies/EditMovie";
// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Members from "./components/main/subscription/AllMembers";
import AddMember from "./components/main/subscription/AddMember";
import Error from "./components/Error/Error";
import EditUser from "./components/main/userManagement/EditUser";
import ManagementNav from "./components/main/userManagement/ManagementNav";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<Main />} >
            <Route path="movies" element={<Movies />} >
              <Route path="allmovies" element={<AllMovies />} />
              <Route path="addmovie" element={<AddMovie />} />
            </Route>
            <Route path="editmovie/:id" element={<EditMovie />} />
            <Route path="subscription" element={<Subscriptions />} >
              <Route path="members" element={<Members />} />
              <Route path="addmember" element={<AddMember />} />
            </Route>
            <Route path="usermanagement" element={<ManageUsers />} >
              <Route path="managementnav" element={<ManagementNav />} >
                <Route path="users" element={<Users />} />
                <Route path="adduser" element={<AddUser />} />
              </Route>
              <Route path="edituser/:id" element={<EditUser />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
