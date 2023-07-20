import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({id,name,img,price}) => {

   const formatoPrecio= price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })

   return (
      <Card style={{ width: '16rem' }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>
            {formatoPrecio}
         </Card.Text>
         <Link to={`/item/${id}`} className="option">
            <Button variant="outline-info">Ver detalles</Button>
         </Link>
         </Card.Body>
    </Card>
)
}

export default Item