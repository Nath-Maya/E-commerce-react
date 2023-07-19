
const Item = ({id,name,img,price,stock}) => {
   return (
      <div>
         <div>{name}</div>
         <div>{id}</div>
         <div>{price}</div>
         <div>{img}</div>
         <div>{stock}</div>
         <Link to={`/item/${id}`} className="option">Ver detalle</Link>
      </div>
      )
}

export default Item