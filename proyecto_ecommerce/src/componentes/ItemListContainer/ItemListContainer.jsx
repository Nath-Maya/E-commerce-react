import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'



function ItemListContainer(props) {
   //Estado donde se almacenaran los productos obtenidos de AsyncMock
   const  [products,setProducts] = useState([])
   //Obtener el parametro categoriaProducto de la URL 
   const { categoriaProducto } = useParams()
   // Cargar los productos al montar el componente o cuando cambia categoriaProducto
   useEffect(() => {
      const asyncFunc = categoriaProducto ? getProductsByCategory : getProducts

      asyncFunc(categoriaProducto)
         .then(response => {
            setProducts(response)
         })
         .catch(error => {
             console.error(error);
         })
   },[categoriaProducto])

   return (
      <div>
         <h1>{props.greeting}</h1>
         <ItemList products = {products}/>
      </div>
      )
}

export default ItemListContainer;
