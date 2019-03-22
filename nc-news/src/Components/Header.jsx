import React from "react";

const Header = ({ user }) => (
  <header>
    <a href="/">
      <h1 className="text-center">MY NC NEWS</h1>
    </a>
    <h4 className="logged">Logged in as: {user} </h4>
  </header>
);

export default Header;
