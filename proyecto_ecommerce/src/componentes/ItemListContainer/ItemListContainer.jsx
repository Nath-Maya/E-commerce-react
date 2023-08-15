import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'



function ItemListContainer(props) {
   //Estado donde se almacenaran los productos obtenidos de AsyncMock
   const  [products,setProducts] = useState([])
   //Obtener el parametro categoryId de la URL 
   const { categoryId } = useParams()
   // Cargar los productos al montar el componente o cuando cambia categoryId
   useEffect(() => {
      if (categoryId) {
      
      getProductsByCategory(categoryId)
         .then(response => {
            setProducts(response)
         })
         .catch(error => {
             console.error(error);
         })
      } else {
         getProducts()
         .then((response) => {
           setProducts(response);
         })
         .catch((error) => {
           console.error(error);
         });
      }
   }, [categoryId]);

   return (
      <div>
         <h1>{props.greeting}</h1>
         <ItemList products = {products}/>
      </div>
      )
}

export default ItemListContainer;
