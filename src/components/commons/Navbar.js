import React from "react";
import { Nav, Button, Input } from "../../styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="menu-logo">
        <Link to="/">Covid-19</Link>
      </div>
      <ul className="menu-box">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Input type="text" placeholder="Enter your city..." />
        </li>
      </ul>
      <div className="menu-box-login">
        <Button className="mr-1">Login</Button>
        <Button primary>Register</Button>
      </div>
    </Nav>
  );
};

export default Navbar;
