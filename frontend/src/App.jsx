import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Login2 from "./pages/Login/Login2";
import Login3 from "./pages/Login/Login3";

const App = () => {
  const isLogged = localStorage.getItem("isLogged");
  console.log(isLogged);

  return (
    <>
      <Routes>
        {isLogged ? (
          <>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
      </Routes>
    </>
  );
};

export default App;
