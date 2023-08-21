import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItem = ({ id, img, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Card>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className="item-details">
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
          </div>{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-danger" nClick={() => removeItem(id)}>
          <Link to={`/cart`} /> Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CartItem;
