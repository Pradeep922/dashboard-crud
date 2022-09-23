import React from "react";

import "./App.css";

import { Route, Router, Navigate } from "react-router-dom";

import GetUsers from "./Page/GetUsers";
import NewUser from "./Page/NewUser";
import UserProfile from "./Page/UserProfile";
import EditUserPage from "./Page/EditUserPage";
import HomePage from "./HomePage";
import Data from "./config/DataFetch";

import UserContext from "./context/UserContext";

function App() {
  return (
    <>
      <UserContext>
        <Router>
          <Route path="/dashboard/all-users">
            <GetUsers />
          </Route>
          <Route path="/dashboard/create-user">
            <NewUser />
          </Route>
          <Route path="/dashboard/view-profile/:id">
            <UserProfile />
          </Route>
          <Route path="/dashboard/editProfile/:id">
            <EditUserPage />
          </Route>
          <Route path="/dashboard">
            <HomePage />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/">
            <Navigate to="/dashboard"></Navigate>
          </Route>
        </Router>
      </UserContext>
    </>
  );
}

export default App;