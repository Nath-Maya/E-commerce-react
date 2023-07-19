import CartWindget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-left">
         <Link to='/'>
         <LogoHeader/>
         </Link>
        <ul>
          <NavLink to={`/category/Bicicletas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bicicletas</NavLink>
          <NavLink to={`/category/Accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
        </ul>
      </div>
      <CartWindget/>
    </nav>
  );
};

export default NavBar;
