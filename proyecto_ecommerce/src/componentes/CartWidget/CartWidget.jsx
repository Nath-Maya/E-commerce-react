import "./assets/CartWidget.css"
import carrito from "./assets/carrito.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      
      <img className="CartWidget" src={carrito} alt="carrito de compras" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
