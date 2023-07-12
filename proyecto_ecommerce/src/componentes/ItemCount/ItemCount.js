import './ItemCount.css'
import { useState } from 'react'

//Estado donde se almacenara la cantidad del contador
const ItemCount = ({stock, initial, onAdd}) => {
   const [quantity, setQuatity] = useState(initial)
   


   //!Funciones de Incrementacion y Decrementacion

   function increment() {
      if(quantity < stock) {
         setQuatity(quantity + 1);
      };
   };

   function decrement() {
      if(quantity > 1) {
         setQuatity(quantity - 1);
      };
   };

   //! Elemento que se retornara



}