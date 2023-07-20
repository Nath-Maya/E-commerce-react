import React from "react";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name,price,categoria,img,stock,description}) => {
  
   console.log({name,price,categoria,img,stock,description})

   const onAdd = () => {

   }


   return (
      <div>
        
      <picture>
          <img src={img} alt={name} />
      </picture>
      <header>
          <h2>
              {name}
          </h2>
      </header>
      <section>
          <p>
              Categoria: {categoria}
          </p>
          <p>
              {description}
          </p>
          <p>
              Precio: ${price}
          </p>
          <p>
              Stock: {stock}
          </p>
      </section>
      <footer>
          <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
      </footer>
  </div>

      )
}

export default ItemDetail