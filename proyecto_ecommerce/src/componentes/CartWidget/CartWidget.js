import carrito from "./assets/carrito.png";

const CartWindget = () => {
  return (
    <div class="navbar-carrito">
      <ul>
        <li class="navbar-shopping-cart">
          <img class="navbar-shopping-cart" src={carrito} alt="carrito de compras" />
          0
        </li>
      </ul>
    </div>
  );
};

export default CartWindget;
