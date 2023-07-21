import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = ({name,price,categoria,img,stock,description}) => {
  
   console.log({name,price,categoria,img,stock,description})

   const onAdd = () => {

   }

   return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Categoria: {categoria}</ListGroup.Item>
      <ListGroup.Item>Disponibles: {stock}</ListGroup.Item>
      <ListGroup.Item>Precio: ${price} </ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
    </Card.Body>

  </Card>

     

)
}

export default ItemDetail