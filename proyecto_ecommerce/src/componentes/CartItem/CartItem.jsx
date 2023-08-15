import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartItem = ({ id, img, name, price, quantity }) => {
   const { removeItem } = useContext(CartContext)

   return (
      <div className="cart-item">
      <img src={img} alt={name} />
      <div className="item-details">
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: ${price * quantity}</p>
      </div>
        <button onClick={() => removeItem(id)}>
          <Link to={`/cart`}>Eliminar </Link>
        </button>{" "}
    </div>
      
      )

}

export default CartItem

