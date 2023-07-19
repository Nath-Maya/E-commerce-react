import React from "react";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,name,price,categoria,img,stock,description}) => {
   //Convertir price en pesos
   const formatoPrecio= price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });


   return (
      <div className="card-item">
         <p>
            {id}
         </p>
         <p>
            {name}
         </p>
         <p>
            {formatoPrecio}
         </p>
         <p>
            {categoria}
         </p>
         <img src={img} alt={name} />
         <p>
            {stock}
         </p>
         <p>
            {description}
         </p> 
            <footer>
               <ItemCount/>
            </footer>


      </div>
      )
}

export default ItemDetail