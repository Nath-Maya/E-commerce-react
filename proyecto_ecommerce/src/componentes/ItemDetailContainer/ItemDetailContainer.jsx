import { useState, useEffect } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

   const [productos, setProduct] = useState(null)

   useEffect(() => {
      getProductById(1)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
   }, [])

   return (
      <div className="item-detail-container">
         <ItemDetail {...productos}/>
      </div>
   )
}

export default ItemDetailContainer