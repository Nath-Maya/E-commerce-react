const NavBar = () => {
  return (
    <nav>
      <div class="navbar-left">
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" class="logo"></img>
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

      <div class="navbar-right">
        <ul>
          <li class="navbar-shopping-cart">
            <img
              src={process.env.PUBLIC_URL + "/img/carrito.png"}
              alt="carrito de compras"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
