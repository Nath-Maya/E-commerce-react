import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";
import { NavLink, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'



const NavBar = () => {

  return (
    <Nav className="header" variant="underline" defaultActiveKey="/home">
      <Link to={'/'} className="logo-header">
          <LogoHeader/>
      </Link>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <NavLink className="navLink" to={'/'}>Home</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <NavLink className="navLink" to="/categoria/Accesorios">Accesorios</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
        <NavLink  className="navLink"to="/categoria/Bicicletas">Bicicletas</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
        <NavLink  className="navLink"to="/categoria/Ropa">Ropa</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="item-car">
        <CartWidget/>
      </Nav.Item>
     
    </Nav>
  );
};

export default NavBar;
