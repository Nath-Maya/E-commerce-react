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

   function addCar() {
      onAdd(quantity)
   }

   //! Elemento que se retornara

   return (
     <div className="container-counter">
       <h1 className="number-counter"> {stock} </h1>
       <div className="controls-counter">
         <button className="counter-button" onClick={decrement}> - </button>
         <button className="counter-button onAdd" onClick={addCar} disabled={!stock}> Agregar al carrito </button>
         <button className="counter-button" onClick={increment}> + </button>
       </div>
     </div>
   );

};

export default ItemCount