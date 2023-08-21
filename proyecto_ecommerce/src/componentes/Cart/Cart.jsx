import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Cart.css'


const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);

  let total = 0;
  cart.forEach((p) => {
    total += p.price * p.quantity;
  });


  if (totalQuantity === 0) {
    return (
      <div>
        <h1> No hay items en el carrito </h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="productos-group">
      <CardGroup>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </CardGroup>
      <div className="modal show" style={{ display: "block", position: "initial" }} >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Total Compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => clearCart()}>
              Limpiar Carrito
            </Button>{" "}
            <Button variant="outline-info lg">
              <Link to="/checkout" className="Option"> Checkout </Link>
             </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default Cart;
