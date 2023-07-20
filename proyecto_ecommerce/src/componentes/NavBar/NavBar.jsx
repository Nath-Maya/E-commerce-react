import CartWindget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

  console.log("Entre")

  return (
    <nav>
      <div className="navbar-left">
         <Link to={'/'}>
          <LogoHeader/>
         </Link>
        <ul>
          <NavLink to={`/categoria/Bicicletas`}>Bicicletas</NavLink>
          <NavLink to={`/categoria/Accesorios`}>Accesorios</NavLink>
        </ul>
      </div>
      <CartWindget/>
    </nav>
  );
};

export default NavBar;
