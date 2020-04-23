import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar.js";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  //search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div>
        <div className="navbar bg-primary">
          <Navbar />
        </div>
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
