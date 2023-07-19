import React from "react";
import Item from '../Item/Item'

const ItemList = ({productos}) => {
   return (
      <div className="list-group">
         {productos.map (prod => <Item key={prod.id} {...prod}/>)}
      </div>
      )
};

export default ItemList