import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'



function ItemListContainer({greeting}) {
   //Estado donde se almacenaran los productos obtenidos de AsyncMock
   const  [productos,setProductos] = useState([])
   //Obtener el parametro categoryId de la URL 
   const { categoryId } = useParams()
   // Cargar los productos al montar el componente o cuando cambia categoryId
   useEffect(() => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
         .then(response => {
            setProductos(response)
         })
         .catch(error => {
             console.error(error);
         })
   },[categoryId])

   return (
      <div>
         <h1>{greeting}</h1>
         <ItemList productos = {productos}/>
      </div>
      )
}

export default ItemListContainer;
