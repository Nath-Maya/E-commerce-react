import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import './ItemCount.css'
import Swal from 'sweetalert2'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuatity] = useState(initial);

  function increment() {
    if(stock == 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No hay disponible',
        footer: '<a href="/"> Ver otros productos </a>'
      })
    } if (quantity < stock)

     {
      setQuatity(quantity + 1);
    }
  }

  function decrement() {
    if(stock == 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No hay disponible',
        footer: '<a href="/"> Ver otros productos </a>'
      })
    } 
    if (quantity > 1) {
      setQuatity(quantity - 1);
    }
  }

  function addCar() {
    onAdd(quantity);
  }

  return (
    <div>
      <ListGroup.Item className="text-cantidad-detail">Cantidad: {quantity}</ListGroup.Item>
      <ButtonGroup aria-label="Basic example">
        <Button variant="dark" onClick={decrement}>
          {" "}
          -{" "}
        </Button>
        <Button variant="outline-primary" onClick={addCar} disabled={!stock}>
          Añadir al Carrito
        </Button>
        <Button variant="dark" onClick={increment}>
          {" "}
          +{" "}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
