import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Sign from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import Main from "./components/main/Main.jsx";
// import Loading from "./Components/sign/Loading";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Sign />} />
          <Route path="main" element={<Main />} />
          <Route path="signUp" element={<SignUp />} />
          {/* <Route path="loading" element={<Loading />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
