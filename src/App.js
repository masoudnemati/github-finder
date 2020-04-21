import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar bg-primary">
          <Navbar />
        </div>
        <Users />
      </div>
    );
  }
}

export default App;
