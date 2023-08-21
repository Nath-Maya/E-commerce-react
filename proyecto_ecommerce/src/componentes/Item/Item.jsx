import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'


const Item = ({id,name,img,price}) => {

  let formatoPrecio= price.toLocaleString("es-CO",{ style: "currency",
   currency: "COP", minimumFractionDigits: 0, maximumFractionDigits: 0,})

   return (
      <Card className="card-container-item" style={{ width: '16rem' }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
         <Card.Title className="name-detail">{name}</Card.Title>
         <Card.Text>
            {formatoPrecio}
         </Card.Text>
         <Link to={`/item/${id}`} className="option">
          <Button variant="outline-info" className="btn-detail">Ver detalles</Button>
        </Link>
         </Card.Body>
    </Card>
)
}

export default Item