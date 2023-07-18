import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,name,price,categoria,img,stock,description}) => {
   return (
      <div className="card-item">
         <p>
            {id}
         </p>
         <p>
            {name}
         </p>
         <p>
            {price}
         </p>
         <p>
            {categoria}
         </p>
         <p>
            {img}
         </p>
         <p>
            {stock}
         </p>
         <p>
            {description}
         </p> 
            <footer>
               <ItemCount/>
            </footer>


      </div>
      )
}

export default ItemDetail