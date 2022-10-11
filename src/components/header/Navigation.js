import React from "react";
import "./Navigation.css";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar light color="light" expand="sm">
        <div className="container">
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <div>
                <NavItem>
                  <Link to={`/calculator`} className="nav-link nav_item">
                    Calculator
                  </Link>
                </NavItem>
              </div>
              <div>
                <NavItem>
                  <Link to={`/calender`} className="nav-link nav_item">
                    Calender Validator
                  </Link>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
