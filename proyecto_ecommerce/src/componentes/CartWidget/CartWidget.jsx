import carrito from "./assets/carrito.png";

const CartWindget = () => {
  return (
    <div className="navbar-carrito">
      <ul>
        <li className="navbar-shopping-cart">
          <img className="navbar-shopping-cart" src={carrito} alt="carrito de compras" />
          0
        </li>
      </ul>
    </div>
  );
};

export default CartWindget;
