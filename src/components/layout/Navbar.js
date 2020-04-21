import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa fa-github",
};
export default Navbar;
