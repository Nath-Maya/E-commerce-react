import carrito from "./assets/carrito.png";
import "./assets/CartWidget.css"

const CartWidget = () => {
  return (
          <img className="CartWidget" src={carrito} alt="carrito de compras" />
  );
};

export default CartWidget;
