import React from "react";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Learn from "./components/Learn";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      underConst: {
        Learn: false,
        Community: true,
        Blog: false,
      },
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/users/:profileId" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
