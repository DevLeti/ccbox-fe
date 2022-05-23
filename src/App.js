import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import NonUserMainPage from "./pages/NonUserMainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/user" exact />
        <Route element={<NonUserMainPage />} path="/" exact />
        <Route element={<RegisterPage />} path="/register" exact />
        <Route element={<LoginPage />} path="/login" exact />
      </Routes>
    </>
  );
}

export default App;
