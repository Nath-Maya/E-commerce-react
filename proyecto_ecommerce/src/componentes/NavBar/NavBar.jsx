import React from "react";
import CartWindget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {

  return (
    <nav>
         <Link to={'/'}>
          <LogoHeader/>
         </Link>
         <NavLink to="/category/Accesorios">Accesorios</NavLink>
         <NavLink to="/category/Bicicletas">Bicicletas</NavLink>
      <CartWindget/>
    </nav>
  );
};

export default NavBar;
