import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Sign from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import Loading from './components/sign/Loading'
import Main from "./components/main/Main.jsx";
import ManageUsers from "./components/main/ManageUsers";
import Movies from "./components/main/Movies";
import Subscriptions from "./components/main/Subscriptions";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Sign />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="loading/:id" element={<Loading />} />
          <Route path="main" element={<Main />} >
            <Route path="manageusers" element={<ManageUsers />} />
            <Route path="movies" element={<Movies />} />
            <Route path="subscriptions" element={<Subscriptions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
