import React from "react";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Learn from "./components/Learn";
import Community from "./components/Community";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Blog" element={<Blog />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
