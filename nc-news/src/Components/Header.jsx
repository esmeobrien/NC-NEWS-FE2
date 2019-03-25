import React from "react";
import "./Header.css"; 

const Header = ({ user }) => (
  <header>
    <div className="row">
    <div className="col-md-12">
      <a href="/">
        <h1 className="text-center">MY NC NEWS</h1>
      </a>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
        <h4 className="logged">Logged in as: {user} </h4>
    </div>
    <div className="col-md-6"><a href="/create" id="createTitle"><h4>Create an Article</h4></a></div>
    </div>
  </header>
);

export default Header;
