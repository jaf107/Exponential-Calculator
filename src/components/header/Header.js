import React from "react";
import Navigation from "./Navigation";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="col-12 header_top">
        <div>
          <Link to={"/"} className="h1  nav-brand">
            Testing
          </Link>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Header;
