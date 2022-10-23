import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// components
import Sign from "./components/sign/SignIn";
import Register from "./components/sign/Register";
// import Loading from './components/sign/Loading'
import Main from "./components/main/Main.jsx";
import ManageUsers from "./components/main/ManageUsers";
import Movies from "./components/main/Movies";
import Subscriptions from "./components/main/Subscriptions";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="loading/:id" element={<Loading />} /> */}
          <Route path="signin" element={<Sign />} >
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
