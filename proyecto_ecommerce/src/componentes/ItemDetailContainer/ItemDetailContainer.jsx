import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

   const [productos, setProduct] = useState(null)
   //Obtener el itemId de la URL
   const { itemId } = useParams()

   useEffect(() => {
      getProductById(itemId)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
   }, [itemId])

   return (
      <div className="item-detail-container">
         <ItemDetail {...productos}/>
      </div>
   )
}

export default ItemDetailContainer