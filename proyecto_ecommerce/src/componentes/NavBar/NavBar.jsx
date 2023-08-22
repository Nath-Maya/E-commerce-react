import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar = () => {

  return (
    /*
    <Nav  expand="lg" className="bg-body-tertiary" variant="underline" defaultActiveKey="/home">
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
    */

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  className="logo-header">
          <Link to={"/"} >
            <LogoHeader />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <NavLink className="navLink" to={"/"}>
                  Home
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <NavLink className="navLink" to="/categoria/Accesorios">
                  Accesorios
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
                <NavLink className="navLink" to="/categoria/Bicicletas">
                  Bicicletas
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">
                <NavLink className="navLink" to="/categoria/Ropa">
                  Ropa
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item-car">
              <CartWidget />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar;
