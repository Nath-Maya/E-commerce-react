import React from "react"
import { Link } from "react-router-dom"


const Item = ({id,name,img,price,categoria}) => {
   return (
      <div>
         <div>{name}</div>
         <div>{id}</div>
         <div>{price}</div>
         <div>{img}</div>
         <div>{categoria}</div>
         <Link to={`/item/${id}`} className="option">Ver detalle</Link>
      </div>
      )
}

export default Item