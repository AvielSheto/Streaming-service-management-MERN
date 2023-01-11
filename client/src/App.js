import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Subscriptions from "./pages/Subscriptions";
import ManageUsers from "./pages/ManageUsers";
import Register from "../src/pages/Register";
import MoviesNav from "./pages/MoviesNav";
import Home from "./pages/Home";
import Error from "./pages/Error";
// Components
import Movies from "./components/main/movies/Movies"
import Navbar from "./components/navbar/NavBar"
import Main from "./components/main/Main.jsx";
import SubscriptionsNav from "./components/main/subscription/SubscriptionsNav";
import AddUser from "./components/main/userManagement/AddUser";
import Users from "./components/main/userManagement/Users";
import AddMovie from "./components/main/movies/AddMovie";
import EditMovie from "./components/main/movies/EditMovie";
import AddMember from "./components/main/subscription/AddMember";
import EditUser from "./components/main/userManagement/EditUser";
import ManagementNav from "./components/main/userManagement/ManagementNav";
import EditMember from "./components/main/subscription/EditMember";
import AddSubscriptions from "./components/main/subscription/AddSubscriptions";
// Toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <Route path="moviesnav" element={<MoviesNav />} >
              <Route path="movies" element={<Movies />} />
              <Route path="addmovie" element={<AddMovie />} />
            </Route>
            <Route path="editmovie/:id" element={<EditMovie />} />
            <Route path="subscriptionsnav" element={<SubscriptionsNav />} >
              <Route path="subscriptions" element={<Subscriptions />} />
              <Route path="addmember" element={<AddMember />} />
              <Route path="addSubscriptions" element={<AddSubscriptions />} />
            </Route>
            <Route path="usermanagement" element={<ManageUsers />} >
              <Route path="managementnav" element={<ManagementNav />} >
                <Route path="users" element={<Users />} />
                <Route path="adduser" element={<AddUser />} />
              </Route>
              <Route path="edituser" element={<EditUser />} />
            </Route>
            <Route path="editmember" element={<EditMember />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
