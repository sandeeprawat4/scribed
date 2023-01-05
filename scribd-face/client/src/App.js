import React from "react";
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Landing, Login, Signup } from "./screens";

const App=() => {
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  const[user, setUser] = useState({});
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
