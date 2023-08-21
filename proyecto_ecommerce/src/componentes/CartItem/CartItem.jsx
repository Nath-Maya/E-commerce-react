import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItem = ({ id, img, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  let precioUnitario = price.toLocaleString("es-CO",{ style: "currency", currency: "COP", minimumFractionDigits: 0,  maximumFractionDigits: 0, })

  let subtotal = price * quantity;


  return (
    <Card>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className="item-details">
            <p>Precio: {precioUnitario}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: {subtotal.toLocaleString("es-CO",{ style: "currency", currency: "COP", minimumFractionDigits: 0,  maximumFractionDigits: 0, })}</p>
          </div>{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-danger" onClick={() => removeItem(id)}>
          <Link to={`/cart`}> Eliminar </Link>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CartItem;
