import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

   const [product, setProduct] = useState(null)
   //Obtener el itemId de la URL
   const { itemId }   = useParams();

   useEffect(() => {
      console.log("soy itemID: " + itemId)
      getProductById(itemId)
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [itemId]);

   return (
      <div className="item-detail-container">
         <ItemDetail {...product}/>
      </div>
   )
}

export default ItemDetailContainer