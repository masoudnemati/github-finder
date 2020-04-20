import React, { Component } from "react";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fa fa-github",
  };
  render() {
    return (
      <div>
        <h1>
          {" "}
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
