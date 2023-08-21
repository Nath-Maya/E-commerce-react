import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({
  id,
  name,
  price,
  categoria,
  img,
  stock,
  description,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <Card style={{ width: "20rem" }} border="info" className="card-detail">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Categoria: {categoria}</ListGroup.Item>
        <ListGroup.Item>Disponibles: {stock}</ListGroup.Item>
        <ListGroup.Item>Precio: {price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            <Button variant="dark" size="lg">
              Terminar Compra
            </Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
