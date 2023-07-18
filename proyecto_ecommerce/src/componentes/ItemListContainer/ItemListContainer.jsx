import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../asyncMock';



function ItemListContainer({greeting}) {
   return <h1>{props.greeting}</h1>;

   const  [productos,setProductos] = useState([])

   useEffect(() => {
      getProducts()
         .then(response => {
            setProductos(response)
         });
         // .catch(error => {
         //    console.error(error);
         // })
   },[])

   return (
      <div>
         <h1>{greeting}</h1>
         <ItemList productos = {productos}/>
      </div>
      )
}

export default ItemListContainer;
