import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        login: "naghi",
        id: 136,
        node_id: "MDQ6VXNlcjEzNg==",
        avatar_url: "https://avatars2.githubusercontent.com/u/136?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/simonjefford",
        html_url: "https://github.com/simonjefford",
      },
      {
        login: "josh",
        id: 137,
        node_id: "MDQ6VXNlcjEzNw==",
        avatar_url: "https://avatars2.githubusercontent.com/u/137?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/josh",
        html_url: "https://github.com/josh",
      },
      {
        login: "stevedekorte",
        id: 138,
        node_id: "MDQ6VXNlcjEzOA==",
        avatar_url: "https://avatars3.githubusercontent.com/u/138?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/stevedekorte",
        html_url: "https://github.com/stevedekorte",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
