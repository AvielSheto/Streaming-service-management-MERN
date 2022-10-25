import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Register from "./components/sign/Register";
import Main from "./components/main/Main.jsx";
import ManageUsers from "./components/main/ManageUsers";
import Movies from "./components/main/Movies";
import Subscriptions from "./components/main/Subscriptions";
// toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./components/sign/Login";

export default function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="loading/:id" element={<Loading />} /> */}
          <Route path="login" element={<Login />} >
            <Route path="manageusers" element={<ManageUsers />} />
            <Route path="movies" element={<Movies />} />
            <Route path="subscriptions" element={<Subscriptions />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
