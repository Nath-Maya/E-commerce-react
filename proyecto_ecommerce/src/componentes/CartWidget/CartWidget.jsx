import React from "react";
import "./assets/CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const carrito = require("./assets/carrito.png");

  const totalQ = totalQuantity();

  return (
    <div className="cart-container">
      <Link to="/cart" style={{ textDecoration: 'none', display: totalQ > 0 ? 'block' : 'none'}} >
        <img className="CartWidget" src={carrito} alt="carrito de compras" />
        <p className="text-cantidad">{totalQuantity()}</p>
      </Link>
      
    </div>
  );
};

export default CartWidget;
