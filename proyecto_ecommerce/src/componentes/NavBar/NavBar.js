import CartWindget from "../CartWidget/CartWidget";
import LogoHeader from "../LogoHeader/LogoHeader";

const NavBar = () => {
  return (
    <nav>
      <div class="navbar-left">
         <LogoHeader/>
        <ul>
          <li>
            <a href="/">Bicicletas</a>
          </li>
          <li>
            <a href="/">Accesorios</a>
          </li>
          <li>
            <a href="/">Ropa</a>
          </li>
        </ul>
      </div>
      <CartWindget/>
    </nav>
  );
};

export default NavBar;
