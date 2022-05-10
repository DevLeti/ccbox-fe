import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" exact />
      </Routes>
    </>
  );
}

export default App;
