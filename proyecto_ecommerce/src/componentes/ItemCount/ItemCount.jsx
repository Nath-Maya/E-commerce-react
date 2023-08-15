import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

//Estado donde se almacenara la cantidad del contador
const ItemCount = ({stock, initial, onAdd}) => {
   const [quantity, setQuatity] = useState(initial)
   


   //!Funciones de Incrementacion y Decrementacion

   function increment() {
      if(quantity < stock) {
         setQuatity(quantity + 1);
         console.log("sumando " + "total= " + quantity)
      };
   };

   function decrement() {
      if(quantity > 1) {
         setQuatity(quantity - 1);
         console.log("restando " + "total= " + quantity)
      };
   };

   function addCar() {
      onAdd(quantity)
      console.log("adicionar al carrito " + "total= " + quantity)
   }

   //! Elemento que se retornara

   return (
   <div>
   <ListGroup.Item>Cantidad: {quantity}</ListGroup.Item>
   <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={decrement}> - </Button>
      <Button variant="info" onClick={addCar} disabled={!stock}>Añadir al Carrito</Button>
      <Button variant="secondary" onClick={increment}> + </Button>
    </ButtonGroup>
   </div>

   );

};

export default ItemCount