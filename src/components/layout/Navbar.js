import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
};
export default Navbar;
