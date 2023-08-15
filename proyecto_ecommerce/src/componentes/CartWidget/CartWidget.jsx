import React from "react";
import "./assets/CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
  const carrito = require('./assets/carrito.png')

  return (
    <div>
    <Link to='/cart'>
      <img className="CartWidget" src={carrito} alt="carrito de compras"/>
    </Link>
    <p>
    {totalQuantity()}
    </p>

    </div>

  );
};

export default CartWidget;
